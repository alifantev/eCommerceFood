using System.Collections.Generic;
using eCommerce.Domain.Goods;
using eCommerce.Domain.Goods.Enums;

namespace eCommerce.Repositories.Interfaces
{
	public interface IProductRepository
	{
		IEnumerable<Product> GetAllProducts();

		IEnumerable<Product> GetProducts(ProductCategory category);

		Product GetProduct(int id);

		int Save(Product product);

		void Edit(Product product);

		void Remove(int id);
	}
}