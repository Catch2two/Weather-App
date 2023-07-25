import { fetchWeather, } from "./modules/currentLOGIC";
import { fetchForecast } from "./modules/forecast";
import { handleSearch } from "./modules/search";

const form = document.querySelector("form");
const cityInput = document.querySelector("#cityInput");

form.addEventListener("submit", handleSearch);
// import { getWeatherMap } from "./modules/map";
fetchWeather()
fetchForecast()