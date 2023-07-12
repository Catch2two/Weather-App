import { fetchWeather } from "./modules/weatherCurrent";
import { fetchForecast } from "./modules/weatherForecast";

import fetchWeather from "./fetchWeather";
import forecast from "./forecast";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = document.querySelector("#city").value;
  const weatherData = fetchWeather(city);
  const forecastData = forecast(city);
});