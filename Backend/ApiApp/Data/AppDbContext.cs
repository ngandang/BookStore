using ApiApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiApp.Data
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
		{
		}

		// Add DbSet<T> properties here for your entities, e.g.:
		public DbSet<User> Users { get; set; }
		public DbSet<Product> Products { get; set; }
		public DbSet<Category> Categories { get; set; }
	}
}
