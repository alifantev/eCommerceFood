using AutoMapper;
using eCommerce.Domain.Goods;
using eCommerce.Domain.Menu;
using eCommerce.DtoModels.Goods;
using eCommerce.DtoModels.Menu;
using eCommerce.Site.Api.Mapping.Goods;

namespace eCommerce.Site.Api.Mapping.Menu
{
	public class MenuItemToDtoMapping : Profile
	{
		public MenuItemToDtoMapping()
		{
			CreateMap<MenuItem, MenuItemDto>()
				.ForMember(x => x.Product,
					opt => opt.MapFrom(m => MapToProduct(m.Product)))
				.ForMember(x => x.Price,
					opt => opt.MapFrom(m => MapToProductPrice(m.Price)));
		}

		private IMapper GetMapper()
		{
			var mapperConfiguration = new MapperConfiguration(cfg =>
			{
				cfg.AddProfile(new ProductToDtoMapping());
				cfg.AddProfile(new ProductPriceToDtoMapping());
			});

			return mapperConfiguration.CreateMapper();
		}
		
		private ProductDto MapToProduct(Product product)
		{
			var mapper = GetMapper();

			var result = mapper.Map<ProductDto>(product);

			return result;
		}
		
		private ProductPriceDto MapToProductPrice(ProductPrice price)
		{
			var mapper = GetMapper();

			var result = mapper.Map<ProductPriceDto>(price);

			return result;
		}
	}
}