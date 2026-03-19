using HireTrack.Domain.Entities;
using HireTrack.Infrastructure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Eventing.Reader;

namespace HireTrack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobApplicationsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public JobApplicationsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllApplications()
        {
            var applications = await _context.JobApplications.OrderBy(a => a.DateApplied).ToListAsync();
            return Ok(applications);
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetbyId(Guid Id)
        {
            var application = await _context.JobApplications.FindAsync(Id);
            return Ok(application);
        }

        [HttpPost]
        public async Task<IActionResult> CreateApplication(JobApplication application)
        {
            application.Id = Guid.NewGuid();

            _context.JobApplications.Add(application);
            await _context.SaveChangesAsync();

            return Ok(application);
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteApplication (Guid Id)
        {
            var application = await _context.JobApplications.FindAsync(Id);
            if (application == null)
            {
                return NotFound();
            }
            else
            {
                _context.JobApplications.Remove(application);
                await _context.SaveChangesAsync();
                return NoContent();
            }
        }
    }
}
