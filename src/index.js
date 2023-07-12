import { fetchWeather } from "./modules/weatherCurrent";
import { fetchForecast } from "./modules/weatherForecast";


const weatherData = await fetchWeather();
const forecastData = await fetchForecast();

if (weatherData) {
    console.log(weatherData);
  } else {
    console.log("Error fetching weather data");
  };

if (forecastData) {
    console.log(forecastData);
  } else {
    console.log("Error fetching forecast data")
  }