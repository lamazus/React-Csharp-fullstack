using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Data.Models
{
    public class OrderRequest
    {
        [Required]
        public string CustomerName { get; set; }
        [Required]
        public string Telephone { get; set; }
        [Required]
        public string DeliveryAddress { get; set; }

        [Required]
        [MinLength(1, ErrorMessage ="В корзину не добавлены товары")]
        public IEnumerable<PizzaInCartRequest> Cart { get; set; }

    }
}
