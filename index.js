function Tempconverter() {
  let temp = document.getElementById("data");
  temperature = temp.value;
  let option = document.getElementById("select");
  let toCelcius = document.getElementById("temp1");
  let toFahrenheit = document.getElementById("temp2");
  let toKelvin = document.getElementById("temp3");
  if (option.value == "Fahrenheit") {
    toCelcius.value = (((temperature - 32) * 5) / 9).toFixed(2);
    toFahrenheit.value = temperature;
    toKelvin.value = (((temperature - 32) * 5) / 9 + 273.15).toFixed(2);
  }

  if (option.value == "Celsius") {
    toCelcius.value = temperature;
    toFahrenheit.value = ((temperature * 9) / 5 + 32).toFixed(2);
    toKelvin.value = parseInt(temperature) + 273.15;
  }

  if (option.value == "Kelvin") {
    toCelcius.value = temperature - 273.15;
    toFahrenheit.value = (((temperature - 273.15) * 9) / 5 + 32).toFixed(2);
    toKelvin.value = temperature;
  }
}
