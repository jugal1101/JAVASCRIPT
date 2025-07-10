let input = document.getElementById("input");
let button = document.getElementById("btn");
let result = document.getElementById("result");
let cityName = document.getElementById("city");
let degree = document.getElementById("degree");
let discription = document.getElementById("disc");
let humidity = document.getElementById("hum");
let wind = document.getElementById("wind");
let img = document.getElementById("img")

function weather(city) {
  let WeatherApi =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=d19add982f375466659a0f6f65b20140&units=metric";
  fetch(WeatherApi)
    .then((res) => res.json())
    .then((data) => {
      cityName.textContent = data.name;
      degree.textContent = Math.round(data.main.temp) + "°C";
      discription.textContent = data.weather[0].description;
      humidity.textContent = " Humidity:  " + data.main.humidity + "%";
      wind.textContent = " Wind:  " + Math.round(data.wind.speed) + " km/h ";
      img.src="https://static.vecteezy.com/system/resources/thumbnails/024/825/195/small_2x/3d-weather-icon-day-with-rain-free-png.png"

    });
}

button.addEventListener("click", () => {
  const city = input.value;
  weather(city);
});
