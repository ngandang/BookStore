using ApiApp.Data;
using ApiApp.Models;
using ApiApp.Models.Api;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
	private readonly AppDbContext _context;

	public ProductsController(AppDbContext context)
	{
		_context = context;
	}

	[HttpGet]
	public async Task<IActionResult> GetProduct([FromQuery] QueryProductApiModel query)
	{
		var productsQuery = _context.Products.AsQueryable();

		if (!string.IsNullOrWhiteSpace(query.Name))
		{
			productsQuery = productsQuery.Where(p => p.Name != null && p.Name.Contains(query.Name));
		}
		if (!string.IsNullOrWhiteSpace(query.Category))
		{
			productsQuery = productsQuery.Where(p => p.Category != null && p.Category.Contains(query.Category));
		}
		if (query.Rating.HasValue)
		{
			productsQuery = productsQuery.Where(p => p.Rating == query.Rating);
		}

		var products = await productsQuery.ToListAsync();
		return Ok(products);
	}

	[HttpGet("{id}")]
	public async Task<IActionResult> GetById(int id)
	{
		var product = await _context.Products.FindAsync(id);
		if (product == null)
			return NotFound();
		return Ok(product);
	}

	[HttpPost]
	public async Task<IActionResult> Create([FromBody] Product product)
	{
		if (product == null)
			return BadRequest();
		_context.Products.Add(product);
		await _context.SaveChangesAsync();
		return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
	}

	[HttpPut("{id}")]
	public async Task<IActionResult> Update(int id, [FromBody] Product updatedProduct)
	{
		if (updatedProduct == null || id != updatedProduct.Id)
			return BadRequest();
		var product = await _context.Products.FindAsync(id);
		if (product == null)
			return NotFound();

		product.Name = updatedProduct.Name;
		product.Category = updatedProduct.Category;
		product.Rating = updatedProduct.Rating;
		product.Price = updatedProduct.Price;
		product.ImageUrl = updatedProduct.ImageUrl;

		await _context.SaveChangesAsync();
		return Ok(product);
	}

	[HttpDelete("{id}")]
	public async Task<IActionResult> Delete(int id)
	{
		var product = await _context.Products.FindAsync(id);
		if (product == null)
			return NotFound();
		_context.Products.Remove(product);
		await _context.SaveChangesAsync();
		return NoContent();
	}
}
