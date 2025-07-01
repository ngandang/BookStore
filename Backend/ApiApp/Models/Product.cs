namespace ApiApp.Models
{
	public class Product
	{
		public int Id { get; set; }
		public string? Name { get; set; }
		public string? Description { get; set; }
		public decimal Price { get; set; }
		public string? ImageUrl { get; set; }
		public int Stock { get; set; }
		public string? Author { get; set; }
		public string? Publisher { get; set; }
		public int? Rating { get; set; }
		public string? Category { get; set; }
	}
}
