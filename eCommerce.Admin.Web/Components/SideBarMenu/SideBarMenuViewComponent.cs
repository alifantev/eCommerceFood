using System.Collections.Generic;
using System.Threading.Tasks;
using eCommerce.Admin.Web.Models.SideBarMenu;
using Microsoft.AspNetCore.Mvc;

namespace eCommerce.Admin.Web.Pages.Components.SideBarMenu
{
	public class SideBarMenuViewComponent : ViewComponent
	{
		public async Task<IViewComponentResult> InvokeAsync()
		{
			return View("SideBarMenu", GenerateMenu());
		}
		
		private LeftMenuModel GenerateMenu()
		{
			return new LeftMenuModel()
			{
				Title = "Меню",
				Items = new List<LeftMenuItemModel>()
				{
					new LeftMenuItemModel() {Name = "Товары", Controller = "Products", Action = "Index"},
					//new LeftMenuItemModel(){Name = "Товары", Controller = "Products", Action = "Index"}
				}
			};
		}
	}
}