import { fetchWeather } from "./modules/weatherApi";
import { handleClick } from "./modules/domFunctions";

const weatherData = await fetchWeather();

if (weatherData) {
    console.log(weatherData);
  } else {
    console.log("Error fetching weather data");
  }

console.log("src JS's loaded.")