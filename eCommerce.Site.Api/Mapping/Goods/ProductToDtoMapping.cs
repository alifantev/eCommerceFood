using AutoMapper;
using eCommerce.Domain.Goods;
using eCommerce.DtoModels.Goods;
using eCommerce.DtoModels.Goods.Enums;

namespace eCommerce.Site.Api.Mapping.Goods
{
	public class ProductToDtoMapping : Profile
	{
		public ProductToDtoMapping()
		{
			CreateMap<Product, ProductDto>()
				.ForMember(x => x.Category,
					opt => opt.MapFrom(m => (ProductCategoryDto) m.Category));
		}
	}
}