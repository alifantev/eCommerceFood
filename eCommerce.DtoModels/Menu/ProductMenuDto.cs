using System.Collections.Generic;
using eCommerce.DtoModels.Goods;

namespace eCommerce.DtoModels.Menu
{
	public class ProductMenuDto
	{
		public IEnumerable<MenuItemDto> Items { get; set; }
	}
}