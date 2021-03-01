using System;
using eCommerce.Domain.Goods.Enums;

namespace eCommerce.Domain.Goods
{
	public class ProductPrice
	{
		public Decimal Value { get; set; }
		public Currency Currency { get; set; }
	}
}