using eCommerce.DtoModels.Goods;

namespace eCommerce.DtoModels.Menu
{
	public class MenuItemDto
	{
		public ProductDto Product { get; set; }
		public ProductPriceDto Price { get; set; }
	}
}