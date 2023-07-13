import { handleSearch } from "./handlers";
import { appendWeather } from "./dom";

const apiKey = "6fe5d9b89c10408d90d143901232806"
const city = "Hartford"
const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=yes&alerts=yes`

async function fetchWeather() {

    const response = await fetch(url);

    if (response.status === 200) {
        const data = await response.json();
        // Time
        const condition = data.current.condition.text;
        const updateTime = data.current.last_updated;
        // Temperature
        const temperatureF = data.current.temp_f;
        const temperatureC = data.current.temp_c;
        const feelsLikeF = data.current.feelslike_f;
        const feelsLikeC = data.current.feelslike_c;
        const humidity = data.current.humidity;
        // Wind Info
        const windDir = data.current.wind_dir;
        const windGustM = data.current.gust_mph;
        const windGustK = data.current.gust_kph;
        // Location
        const city = data.location.name;
        const state = data.location.region;
        const latitude = data.location.lat;
        const longitude = data.location.lon;
        return data;
    } else {
        alert("Something went wrong.");
    }
};

// Week Forecast (2 day because I'm poor)
async function fetchForecast() {
 
    const response = await fetch(url);
    // Call API
    if (response.status === 200) {
        const data = await response.json();
    return data.forecast.forecastday;
    }
  };

console.log("Forecast Loaded")
export {fetchWeather, fetchForecast};