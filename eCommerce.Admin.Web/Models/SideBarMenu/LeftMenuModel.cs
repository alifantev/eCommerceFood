using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Admin.Web.Models.SideBarMenu
{
    public class LeftMenuModel
    {
        public string Title { get; set; }

        public IEnumerable<LeftMenuItemModel> Items { get; set; }
    }
}
