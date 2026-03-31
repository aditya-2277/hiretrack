using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HireTrack.Infrastructure;
using HireTrack.Domain.Entities;
using Microsoft.AspNetCore.Http.Metadata;
using HireTrack.Application.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http.HttpResults;

namespace HireTrack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser(RegisterRequestModel registerRequest)
        {
            var existingUser = await _context.appUsers.FirstOrDefaultAsync(u => u.Email == registerRequest.Email);
            if (existingUser != null)
            {
                return BadRequest(new { message = "User already exists!" });
            }

            var user = new AppUser
            {
                FullName = registerRequest.FullName,
                Email = registerRequest.Email,
                Password = registerRequest.Password

            };

            _context.appUsers.Add(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginUser(LoginRequestModel loginRequest)
        {
            var getAuthenticatedUser = await _context.appUsers.FirstOrDefaultAsync(u => u.Email == loginRequest.Email);

            if (getAuthenticatedUser == null)
            {
                return Unauthorized(new { message = "User not found! Please check credentials!" });
            }

            if (getAuthenticatedUser.Password != loginRequest.Password)
            {
                return Unauthorized(new { message = "Invalid credntials! please try again!" });
            }

            return Ok(new
            {
                message = "Login successfull!",
                FullName = getAuthenticatedUser.FullName,
                Email = getAuthenticatedUser.Email
            });
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users  = await _context.appUsers.ToListAsync();
            return Ok(users);
        }
    }

}
