﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Data.Models
{
    public class CountCustomersResponse
    {
        public int Year { get; set; }
        public string Month { get; set; }
        public int Customers { get; set; }
    }
}