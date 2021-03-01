using System.Collections.Generic;
using eCommerce.Domain.Goods.Enums;

namespace eCommerce.Domain.Goods
{
	public class Product
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public IEnumerable<string> Specifications { get; set; }
		public ProductCategory Category { get; set; }
		public string ImagePath { get; set; }
		public string MenuImagePath { get; set; }
		public bool IsRemove { get; set; }
	}
}