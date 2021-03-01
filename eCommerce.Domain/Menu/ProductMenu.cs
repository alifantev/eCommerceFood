using System.Collections.Generic;
using System.Linq;

namespace eCommerce.Domain.Menu
{
	public class ProductMenu
	{
		private List<MenuItem> _items = new List<MenuItem>();

		public IEnumerable<MenuItem> Items => _items;

		public ProductMenu(IEnumerable<MenuItem> items)
		{
			_items = items.ToList();
		}

		public void Add(MenuItem item)
		{
			if (_items.Any(x => x.Product.Id == item.Product.Id))
			{
				return;
			}
			
			_items.Add(item);
		}
	}
}