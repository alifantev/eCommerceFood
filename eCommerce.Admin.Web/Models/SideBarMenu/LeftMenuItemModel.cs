using System;

namespace eCommerce.Admin.Web.Models.SideBarMenu
{
    public class LeftMenuItemModel
    {
        public string Name { get; set; }
        public string Controller { get; set; }
        public string Action { get; set; }
        public string Class { get; set; }
        public bool IsActive { get; set; }

        public string Url 
        {
            get
            {
                String url = "/";
            
                url += this.Controller;
                if (!String.IsNullOrWhiteSpace(this.Action))
                {
                    url += "/" + this.Action;
                }

                return url;
            }
        }
    }
}
