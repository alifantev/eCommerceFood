using eCommerce.Domain.Goods;

namespace eCommerce.Domain.Menu
{
	public class MenuItem
	{
		public Product Product { get; set; }
		public ProductPrice Price { get; set; }
	}
}