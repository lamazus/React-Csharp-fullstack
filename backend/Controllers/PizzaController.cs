using Microsoft.AspNetCore.Mvc;
using backend.Interfaces;
using backend.Data.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PizzaController : ControllerBase
    {
        private readonly IDataRepository _repository;

        public PizzaController(IDataRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Pizza>> GetAll()
        {
            return await _repository.PizzaGetAll();
        }

    }
}
