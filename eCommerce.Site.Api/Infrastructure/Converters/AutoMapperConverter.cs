using AutoMapper;
using eCommerce.Domain.Interfaces.Converters;

namespace eCommerce.Site.Api.Infrastructure.Converters
{
	public class AutoMapperConverter : IAutoMapperConverter
	{
		private readonly IMapper _mapper;

		public AutoMapperConverter(IMapper mapper)
		{
			_mapper = mapper;
		}
		
		/// <inheritdoc />
		public T Map<T>(object value)
		{
			return _mapper.Map<T>(value);
		}
	}
}