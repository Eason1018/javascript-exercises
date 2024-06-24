const convertToCelsius = function(f) {
  converted = (f - 32) * (5/9);
  if(converted % 1 != 0) {
    return parseFloat(converted.toFixed(1));
  }
  else { 
    return converted;
  }
};

const convertToFahrenheit = function(c) {
  converted = (9/5) * c + 32;
  if(converted % 1 != 0) {
    return parseFloat(converted.toFixed(1));
  }
  else { 
    return converted;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
