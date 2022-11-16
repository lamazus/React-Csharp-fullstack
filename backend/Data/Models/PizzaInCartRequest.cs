using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Data.Models
{
    public class PizzaInCartRequest
    {

        [Range(1, int.MaxValue, ErrorMessage ="Некорректно указан Id пиццы")]
        public int PizzaId { get; set; }
        [Range(1,20, ErrorMessage = "Количество продукции одной позиции должно быть от 1 до 20 штук")]
        public int Amount { get; set; }
    }
}
