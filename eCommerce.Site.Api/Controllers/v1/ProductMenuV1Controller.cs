using System.Threading.Tasks;
using eCommerce.Domain.Interfaces.Converters;
using eCommerce.DtoModels.Menu;
using Microsoft.AspNetCore.Mvc;

using eCommerce.Repositories.Interfaces;

namespace eCommerce.Site.Api.Controllers
{
	[ApiController]
	[Route("api/v1/productMenu")]
	public class ProductMenuV1Controller : ControllerBase
	{
		private readonly IProductMenuRepository _productMenuRepository;
		private readonly IAutoMapperConverter _mapper;

		/// <inheritdoc />
		public ProductMenuV1Controller(
			IProductMenuRepository productMenuRepository,
			IAutoMapperConverter mapper)
		{
			_productMenuRepository = productMenuRepository;
			_mapper = mapper;
		}
		
		[HttpGet]
		public async Task<IActionResult> Get()
		{
			var menu = await _productMenuRepository.GetMenu();

			var dto = _mapper.Map<ProductMenuDto>(menu);

			return Ok(dto);
		}
	}
}