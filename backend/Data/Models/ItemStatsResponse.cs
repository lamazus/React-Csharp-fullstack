using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Data.Models
{
    public class ItemStatsResponse
    {
        public int PizzaId { get; set; }
        public string PizzaName { get; set; }
        public int Income { get; set; }
        public int Sales { get; set; }
    }
}