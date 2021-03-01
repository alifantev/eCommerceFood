using System.Threading.Tasks;
using eCommerce.Domain.Menu;
using eCommerce.Repositories.Interfaces;

namespace eCommerce.Repositories
{
	public class ProductMenuRepository : IProductMenuRepository
	{
		/// <inheritdoc />
		public async Task<ProductMenu> GetMenu()
		{
			return MockMenu.Get();
		}
	}
}