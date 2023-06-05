const convertToCelsius = function(x) 
{
	let convert = (x - 32) * 5/9;
	return (convert === 0 ? 0 : +convert.toFixed(1));
};

const convertToFahrenheit = function(x) 
{
	let convert = x * 9/5 + 32;
	return 	(convert === 0 ? 0 : +convert.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
