using ApiApp.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{
	private readonly AppDbContext _context;

	public UserController(AppDbContext context)
	{
		_context = context;
	}

	[HttpGet]
	public async Task<IActionResult> Get()
	{
		var users = await _context.Users.ToListAsync();
		return Ok(users);
	}
}