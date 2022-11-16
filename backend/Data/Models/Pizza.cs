using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Data.Models
{
    public class Pizza
    {
        public int PizzaId { get; set; }
        public string PizzaName { get; set; }
        public string Ingredients { get; set; }
        public int Price { get; set; }
        public string ImgName { get; set; }

    }
}