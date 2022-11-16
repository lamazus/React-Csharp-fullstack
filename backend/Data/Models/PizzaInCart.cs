using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Data.Models
{
    public class PizzaInCart
    {
        public int OrderId { get; set; }
        public string PizzaName { get; set; }
        public int Amount { get; set; }
    }
}
