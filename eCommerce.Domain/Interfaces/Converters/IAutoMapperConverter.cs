namespace eCommerce.Domain.Interfaces.Converters
{
	public interface IAutoMapperConverter
	{
		T Map<T>(object value);
	}
}