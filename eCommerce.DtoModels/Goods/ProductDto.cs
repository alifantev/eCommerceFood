using System.Collections.Generic;
using eCommerce.DtoModels.Goods.Enums;

namespace eCommerce.DtoModels.Goods
{
	public class ProductDto
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public IEnumerable<string> Specifications { get; set; }
		public ProductCategoryDto Category { get; set; }
		public string ImagePath { get; set; }
		public string MenuImagePath { get; set; }
		public bool IsRemove { get; set; }
	}
}