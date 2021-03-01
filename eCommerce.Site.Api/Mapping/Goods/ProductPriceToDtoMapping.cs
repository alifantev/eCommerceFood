using AutoMapper;
using eCommerce.Domain.Goods;
using eCommerce.DtoModels.Goods;
using eCommerce.DtoModels.Goods.Enums;

namespace eCommerce.Site.Api.Mapping.Goods
{
	public class ProductPriceToDtoMapping : Profile
	{
		public ProductPriceToDtoMapping()
		{
			CreateMap<ProductPrice, ProductPriceDto>()
				.ForMember(x => x.Currency,
					opt => opt.MapFrom(m => (CurrencyDto) m.Currency));
		}
	}
}