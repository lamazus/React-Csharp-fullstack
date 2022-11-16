using backend.Data.Models;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class StatisticController : ControllerBase
    {
        readonly private IDataRepository _repository;

        public StatisticController(IDataRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("items-per-ticket")]
        public async Task<ActionResult> ItemsPerTicket()
        {
            var result = await _repository.ItemsPerTicket();
            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpGet]
        [Route("average-ticket")]
        public async Task<ActionResult> AverageTicket()
        {
            var result = await _repository.AverageTicket();
            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpGet]
        [Route("count-customers")]
        public async Task<ActionResult> CountCustomers()
        {
            var result = await _repository.CountCustomers();
            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpGet]
        [Route("items-stats")]
        public async Task<ActionResult> ItemStats()
        {
            var result = await _repository.ItemStats();
            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}
