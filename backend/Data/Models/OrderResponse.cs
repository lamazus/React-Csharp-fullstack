using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Data.Models
{
    public class OrderResponse
    {
        public int OrderId { get; set; }
        public string CustomerName { get; set; }
        public string Telephone { get; set; }
        public string DeliveryAddress { get; set; }
        public int TotalCost { get; set; }
        public DateTime DateOfPurchase { get; set; }
        public int StageId { get; set; }
        public string StageName { get; set; }
        public List<PizzaInCart> Cart { get; set; } = new List<PizzaInCart>();

    }
}
