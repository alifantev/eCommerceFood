using System.Reflection;
using AutoMapper;
using eCommerce.Domain.Interfaces.Converters;
using eCommerce.Repositories;
using eCommerce.Repositories.Interfaces;
using eCommerce.Site.Api.Infrastructure.Converters;
using eCommerce.Site.Api.Mapping;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace eCommerce.Site.Api
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddControllers();

			services.AddSingleton<IProductMenuRepository, ProductMenuRepository>();
			
			#region Automapper

			var autoMapperConfig = new MapperConfiguration(
				cfg =>
				{
					cfg.AddMaps(Assembly.GetAssembly(typeof(MappingAssemblyAnchor)));
				});

			var mapper = autoMapperConfig.CreateMapper();

			services.AddSingleton(mapper);

			services.AddSingleton<IAutoMapperConverter, AutoMapperConverter>();

			#endregion
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseHttpsRedirection();

			app.UseRouting();

			app.UseAuthorization();

			app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
		}
	}
}