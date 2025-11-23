const convertToCelsius = function(f) {
  c = (f - 32) / 1.8;
 let redondeoC = c.toFixed(1);
  let resultadoFinal = parseFloat(redondeoC);
  return resultadoFinal;
};

const convertToFahrenheit = function(c) {
  f = (c * 1.8) + 32;
  let redondeoF = f.toFixed(1);
  let resultadoFinal = parseFloat(redondeoF);
  return resultadoFinal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
