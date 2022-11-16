using backend.Data.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Interfaces
{
    public interface IDataRepository
    {
        //
        // Pizza actions
        //
        Task<Pizza> PizzaGetById(int id);
        Task<IEnumerable<Pizza>> PizzaGetAll();
        Task<int> PizzaPost(PizzaDto pizza);
        Task<Pizza> PizzaEdit(int id, PizzaDto pizza);
        Task PizzaDelete(int id);

        //
        // Order actions
        //
        Task OrderPostAsync(OrderRequest data);
        IEnumerable<OrderResponse> OrderGetAll();
        IEnumerable<OrderResponse> OrderGetFiltered(int filter);
        Task OrderNextStage(int id);
        Task<bool> OrderIsExists(int id);

        //
        // Statistic actions
        //
        Task<IEnumerable<ItemsPerTicketResponse>> ItemsPerTicket();
        Task<IEnumerable<AverageTicketResponse>> AverageTicket();
        Task<IEnumerable<CountCustomersResponse>> CountCustomers();
        Task<IEnumerable<ItemStatsResponse>> ItemStats();
    }
}
