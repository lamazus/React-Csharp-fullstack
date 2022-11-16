using backend.Data.Models;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly IDataRepository _repository;

        public OrderController(IDataRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            var result  =  _repository.OrderGetAll();

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpGet]
        [Route("filtered")]
        public ActionResult GetFiltered([FromQuery] int filter)
        {
            var result = _repository.OrderGetFiltered(filter);
            if (result == null)
                return NotFound();
            return Ok(result);
        }
        [HttpPost]
        public async Task<ActionResult> Post (OrderRequest data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            await _repository.OrderPostAsync(data);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> PutNextOrderStage(int id)
        {
            var entity = await _repository.OrderIsExists(id);

            if (entity == false)
                return NotFound();

            await _repository.OrderNextStage(id);
            return Ok();
        }
    }
}
