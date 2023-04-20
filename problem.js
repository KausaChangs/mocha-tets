//farenheit to celcius

const farenheit = [23, 140, 212, 41];
function convertToCelcius() {
  return farenheit.map((value) => (value - 32) * 5.9);
}
