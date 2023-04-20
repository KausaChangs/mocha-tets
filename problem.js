//farenheit to celcius
//[23, 140, 212, 41] => [-5, 60,100, 5]
// const farenheit = [23, 140, 212, 41];

function getCelcius(fahrenheit) {
  return fahrenheit.map((value) => {
    (value - 32) * (5 / 9);
  });
}
