using System.Collections.Generic;
using System.Linq;
using eCommerce.Domain.Goods;
using eCommerce.Domain.Goods.Enums;

namespace eCommerce.Domain.Menu
{
	public static class MockMenu
	{
		public static ProductMenu Get()
		{
			return new ProductMenu(
				new List<MenuItem>()
				{
					new MenuItem()
					{
						Product = CreatePizza("Пепперони", "Пикантная пепперони, увеличенная порция моцареллы, томатный соус"),
						Price = CreateProductPrice(500)
					},
					new MenuItem()
					{
						Product = CreatePizza("Маргарита", "Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус"),
						Price = CreateProductPrice(400)
					},
					new MenuItem()
					{
						Product = CreatePizza("Четыре сезона", "Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, томатный соус, итальянские травы"),
						Price = CreateProductPrice(550)
					},
					new MenuItem()
					{
						Product = CreatePizza("Мясная", "Цыпленок, ветчина, пикантная пепперони, острая чоризо, моцарелла, томатный соус"),
						Price = CreateProductPrice(600)
					},
					
					new MenuItem()
					{
						Product = CreateDrink("Классический молочный коктейль", "Напиток из молока и мороженого"),
						Price = CreateProductPrice(150)
					},
					new MenuItem()
					{
						Product = CreateDrink("Клубничный молочный коктейль", "Напиток из молока и мороженого с клубничным сиропом"),
						Price = CreateProductPrice(150)
					},
					
					new MenuItem()
					{
						Product = CreateRoll("Калифорния", "Со снежным крабом, сливочным сыром, огурцом, кунжутом и икрой масаго (200 гр.)."),
						Price = CreateProductPrice(150)
					},
					new MenuItem()
					{
						Product = CreateRoll("Лосось сливочный", "С форелью и сливочным сыром (200 гр.)"),
						Price = CreateProductPrice(150)
					},
					new MenuItem()
					{
						Product = CreateRoll("Мини ролл с огурцом", "С огурцом и кунжутом (120 гр.)."),
						Price = CreateProductPrice(150)
					},
					new MenuItem()
					{
						Product = CreateRoll("Мини ролл с тунцом", "С тунцом (120 гр.)."),
						Price = CreateProductPrice(150)
					},
				}
			);
		}

		private static Product CreatePizza(string name, string description)
		{
			return CreateProduct(ProductCategory.Pizza, name, description, new List<string>()
			{
				"Пикантная пепперони", "увеличенная порция моцареллы", "томатный соус"
			});
		}
		
		private static Product CreateDrink(string name, string description)
		{
			return CreateProduct(ProductCategory.Drink, name, description, Enumerable.Empty<string>());
		}

		private static Product CreateRoll(string name, string description)
		{
			return CreateProduct(ProductCategory.Roll, name, description, new List<string>()
			{
				"Белки - 4.3", "Жиры - 4.3", "Углеводы - 17.4", "Калорийность - 125.9 ккал / 527.1 кДж"
			});
		}
		
		 static Product CreateProduct(ProductCategory category, string name, string description, IEnumerable<string> specifications)
		{
			return new Product()
			{
				Id = 1,
				Name = name,
				Category = category,
				Description = description,
				Specifications = specifications,
				ImagePath = "",
				MenuImagePath = "",
				IsRemove = false
			};
		}

		private static ProductPrice CreateProductPrice(decimal value)
		{
			return new ProductPrice()
			{
				Value = value,
				Currency = Currency.RUB
			};
		}
		
	}
}