using System.Threading.Tasks;
using eCommerce.Domain.Menu;

namespace eCommerce.Repositories.Interfaces
{
	public interface IProductMenuRepository
	{
		Task<ProductMenu> GetMenu();
	}
}