using HireTrack.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HireTrack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InterviewsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public InterviewsController(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> GetData()
        {
            await _context.JobApplications.ToListAsync();
            
            return Ok();
        }
    }
}
