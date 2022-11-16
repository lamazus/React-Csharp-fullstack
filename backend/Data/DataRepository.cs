using backend.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using System.Data.SqlClient;
using backend.Data.Models;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace backend.Data
{
    public class DataRepository : IDataRepository
    {
        private readonly string _connectionString;
        public DataRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        //
        // Pizza actions 
        //
        public async Task<Pizza> PizzaGetById(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return await connection.QuerySingleAsync<Pizza>(@"EXEC PizzaGetById @PizzaId=@PizzaId", new { PizzaId = id });
            }
        }

        public async Task<IEnumerable<Pizza>> PizzaGetAll()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return await connection.QueryAsync<Pizza>(@"EXEC PizzaGetAll");
            }
        }
        public async Task<int> PizzaPost(PizzaDto pizza)
        {
            using(var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return await connection.QuerySingleAsync<int>(@"EXEC PizzaPost @PizzaName = @PizzaName, 
                                      @Ingredients = @Ingredients, @Price = @Price, @ImgName = @ImgName",
                   new
                   {
                       PizzaName = pizza.PizzaName,
                       Ingredients = pizza.Ingredients,
                       Price = pizza.Price,
                       ImgName = pizza.ImgName
                   });
            }
        }

        public async Task<Pizza> PizzaEdit(int id, PizzaDto pizza)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                await connection.ExecuteAsync(@"EXEC PizzaEdit @PizzaId = @PizzaId,
                                                @PizzaName = @PizzaName, @Ingredients = @Ingredients, 
                                                @Price = @Price, @ImgName = @ImgName",
                                new
                                {
                                    PizzaId = id,
                                    PizzaName = pizza.PizzaName,
                                    Ingredients = pizza.Ingredients,
                                    Price = pizza.Price,
                                    ImgName = pizza.ImgName
                                });
                return await PizzaGetById(id);
            }
        }
        public async Task PizzaDelete(int id)
        {
            using(var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                await connection.ExecuteAsync(@"EXEC PizzaDelete @PizzaId = @PizzaId", new { PizzaId = id });
            }
        }



        //
        // Order actions
        //
        public async Task OrderPostAsync(OrderRequest data)
        {
            using(var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                string jsonData = JsonSerializer.Serialize(data);

                Console.WriteLine(jsonData);
                await connection.ExecuteAsync(@"EXEC dbo.OrderPost @jsonData=@jsonData", new { jsonData = jsonData });
            }
        }

        public IEnumerable<OrderResponse> OrderGetAll()
        {
            using(var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                using (var multi = connection.QueryMultiple(
                    "OrderGetAll", commandType: System.Data.CommandType.StoredProcedure))
                {
                    var orders = multi.Read<OrderResponse>().ToList();
                    var carts = multi.Read<PizzaInCart>().ToList();

                    foreach(var order in orders)
                    {
                        order.Cart.AddRange(carts.FindAll(p => p.OrderId == order.OrderId));
                    }

                    return orders;
                }
            }
        }

        public IEnumerable<OrderResponse> OrderGetFiltered(int filter)
        {
            using(var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                using (var multi = connection.QueryMultiple(
                    "OrderGetFiltered", new { filter = filter }, commandType: System.Data.CommandType.StoredProcedure))
                {
                    var orders = multi.Read<OrderResponse>().ToList();
                    var carts = multi.Read<PizzaInCart>().ToList();

                    foreach (var order in orders)
                    {
                        order.Cart.AddRange(carts.FindAll(p => p.OrderId == order.OrderId));
                    }

                    return orders;
                }

            }
        }

        public async Task OrderNextStage(int id)
        {
            using(var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                await connection.ExecuteAsync(@"UPDATE Orders SET StageId += 1 WHERE OrderId = @OrderId",
                    new {OrderId = id });
            }
        }

        public async Task<bool> OrderIsExists(int id)
        {
            using(var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var res = await connection.QueryFirstOrDefaultAsync("SELECT * FROM Orders WHERE OrderId = @OrderId",
                                            new { OrderId = id });

                if (res == null)
                    return false;


                return true;
            }
        }


        //
        // Statistic actions
        //
        public async Task<IEnumerable<ItemsPerTicketResponse>> ItemsPerTicket()
        {
            using(var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
               return await connection.QueryAsync<ItemsPerTicketResponse>(@"SELECT YEAR(o.DateOfPurchase) as Year,
	                                              DATENAME(month, DateOfPurchase) as Month,
		                                          (SUM(Amount) / COUNT(DISTINCT o.OrderId)) as AvgItems
                                          FROM Orders as o
                                          LEFT JOIN PizzasInCart as cart ON o.OrderId = cart.OrderId
                                          GROUP BY o.DateOfPurchase");
            }
        }
        
        public async Task<IEnumerable<AverageTicketResponse>> AverageTicket()
        {
            using(var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return await connection.QueryAsync<AverageTicketResponse>(@"SELECT YEAR(DateOfPurchase) as Year,
                                                 DATENAME(month, DateOfPurchase) as Month,
                                                 AVG(TotalCost) as AvgTicket
                                          FROM orders
                                          GROUP BY DateOfPurchase");
            }
        }
        public async Task<IEnumerable<CountCustomersResponse>> CountCustomers() 
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
              return await connection.QueryAsync<CountCustomersResponse>(@"SELECT YEAR(DateOfPurchase) as Year,
	                                             DATENAME(month, DateOfPurchase) as Month,
	                                             COUNT(Telephone) as Customers
                                          FROM Orders
                                          GROUP BY DateOfPurchase");
            }
        }
        public async Task<IEnumerable<ItemStatsResponse>> ItemStats()
        {
            using(var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
               return await connection.QueryAsync<ItemStatsResponse>(@"SELECT p.PizzaId, 
                                                                              PizzaName,
		                                                                      SUM(Amount * Price) as Income,
		                                                                      SUM(Amount) as Sales
                                                                      FROM PizzasInCart as cart
                                                                      LEFT JOIN Pizzas as p ON p.PizzaId = cart.PizzaId
                                                                      GROUP BY p.PizzaId, PizzaName");
                                        }
        }

    }
}

