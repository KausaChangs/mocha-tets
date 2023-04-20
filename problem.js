//farenheit to celcius
//[23, 140, 212, 41] => [-5, 60,100, 5]
// const farenheit = [23, 140, 212, 41];

function convertToCelcius(farenheit) {
  return farenheit.map((value) => (value - 32) * 5.9);
}
