using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Data.Models
{
    public class AverageTicketResponse
    {
        public int Year { get; set; }
        public string Month { get; set; }
        public int AvgTicket { get; set; }
    }
}
