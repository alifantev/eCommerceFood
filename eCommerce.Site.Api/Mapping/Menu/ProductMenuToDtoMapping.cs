using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using eCommerce.Domain.Menu;
using eCommerce.DtoModels.Menu;
using eCommerce.Site.Api.Mapping.Goods;

namespace eCommerce.Site.Api.Mapping.Menu
{
	public class ProductMenuToDtoMapping : Profile
	{
		public ProductMenuToDtoMapping()
		{
			CreateMap<ProductMenu, ProductMenuDto>()
			.ForMember(x => x.Items,
				opt => opt.MapFrom(m => m.Items.Select(MapToItem)));
		}

		private MenuItemDto MapToItem(MenuItem item)
		{
			var mapper = GetMapper();

			var result = mapper.Map<MenuItemDto>(item);

			return result;
		}

		private IMapper GetMapper()
		{
			var mapperConfiguration = new MapperConfiguration(cfg =>
			{
				cfg.AddProfile(new MenuItemToDtoMapping());
				cfg.AddProfile(new ProductToDtoMapping());
				cfg.AddProfile(new ProductPriceToDtoMapping());
			});

			return mapperConfiguration.CreateMapper();
		}
	}
}