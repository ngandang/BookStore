using System.Text.Json;
using ApiApp.Data;
using ApiApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiApp.Seed
{
	public class ProductSeeder
	{
		public static async Task SeedAsync(AppDbContext context, string jsonFilePath)
		{
			if (await context.Products.AnyAsync()) return;

			var json = await File.ReadAllTextAsync(jsonFilePath);
			var products = JsonSerializer.Deserialize<List<Product>>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
			if (products != null)
			{
				context.Products.AddRange(products);
				await context.SaveChangesAsync();
			}
		}
	}
}
