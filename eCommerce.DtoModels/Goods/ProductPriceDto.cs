using System;
using eCommerce.DtoModels.Goods.Enums;

namespace eCommerce.DtoModels.Goods
{
	public class ProductPriceDto
	{
		public Decimal Value { get; set; }
		public CurrencyDto Currency { get; set; }
	}
}