using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Data.Models
{
    public class ItemsPerTicketResponse
    {
        public int Year { get; set; }
        public string Month { get; set; }
        public int AvgItems { get; set; }
    }
}
