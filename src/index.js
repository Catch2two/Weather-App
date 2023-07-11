import { fetchWeather } from "./modules/weatherCurrent";
import { fetchForecast } from "./modules/weatherForecast";
import { handleSearch } from "./modules/locationSearch";

const weatherData = await fetchWeather();

if (weatherData) {
    console.log(weatherData);
  } else {
    console.log("Error fetching weather data");
  }

  const forecastData = await fetchForecast();

  if (forecastData) {
    console.log(forecastData);
  } else {
    console.log("Error fetching forecast data")
  }

console.log("src JS's loaded.")