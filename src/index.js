/*
import { fetchWeather, } from "./modules/currentLOGIC";
import { fetchForecast } from "./modules/forecast";
import { handleSearch } from "./modules/search";

const form = document.querySelector("form");
const cityInput = document.querySelector("#cityInput");

form.addEventListener("submit", handleSearch);
// import { getWeatherMap } from "./modules/map";
fetchWeather()
fetchForecast()
*/
const form = document.querySelector("form");
const cityInput = document.querySelector("location");
const city = "Hartford";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newCity = cityInput;
    if (newCity === "") {
      alert("Please enter a city name.");
      return;
    }
    city = newCity;
  });
const apiKey = "6fe5d9b89c10408d90d143901232806";
const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=yes&alerts=yes`;

// Element Selectors
const lastUpdateElement = document.querySelector(".weatherUpdateTime");
const descriptionElement = document.querySelector(".weatherDescription");
const regionElement = document.querySelector(".weatherState");
const cityElement = document.querySelector(".weatherCity");
const latElement = document.querySelector(".weatherLatitude");
const lonElement = document.querySelector(".weatherLongitude");
const temperatureElement_F = document.querySelector(".weatherUnitF");
const temperatureElement_C = document.querySelector(".weatherUnitC");
const feelsLikeElement_F = document.querySelector(".weatherFeelsLikeF");
const feelsLikeElement_C = document.querySelector(".weatherFeelsLikeC");
const weatherHumidity = document.querySelector("#weatherHumidity");
const weatherWindDir = document.querySelector(".weatherWindDir");
const weatherWindGust = document.querySelector(".weatherWindGust");
// Alert
const weatherAlert = document.querySelector(".weatherAlert");
const warningDiv = document.querySelector(".alertDiv");
// Is Day!
const isDayElement = document.querySelector(".isDay");
const icons = ["day.png", "night.png"];
// Update the DOM with the weather data
  function updateCurrentDOM(weatherData) {
  
    lastUpdateElement.innerHTML = weatherData.current.last_updated;
    descriptionElement.innerHTML = weatherData.current.condition.text;
    regionElement.innerHTML = weatherData.location.region;
    cityElement.innerHTML = weatherData.location.name;
    latElement.innerHTML = `Lat: ${weatherData.location.lat}`;
    lonElement.innerHTML = `Lon: ${weatherData.location.lon}`;
    temperatureElement_F.innerHTML = `${weatherData.current.temp_f}°F`;
    temperatureElement_C.innerHTML = `${weatherData.current.temp_c}°C`;
    feelsLikeElement_F.innerHTML = `Feels Like: ${weatherData.current.feelslike_f}°F`;
    feelsLikeElement_C.innerHTML = `Feels Like: ${weatherData.current.feelslike_c}°C`;
    weatherHumidity.innerHTML = `Humidity: ${weatherData.current.humidity}`;
    weatherWindDir.innerHTML = `Wind Direction: ${weatherData.current.wind_dir}`;
    weatherWindGust.innerHTML = `${weatherData.current.gust_mph} Mph / ${weatherData.current.gust_kph} Kph`;
    isDayElement.innerHTML = weatherData.current.is_day;
  /* Paused development 7/10/23
  // Alert System
    const handleClick = () => {
      warningDiv.classList.toggle("hidden");
    };
      for (const alert of weatherData.alerts.alert) {
        weatherAlert.innerHTML += `
        <button id="warningBtn" onclick="handleClick()">Alert</button>
        <div class="alertDiv hidden">
          <h1>${alert.msgtype}</h1>
          <h3>${alert.headline}</h3>
          <p>Severity: ${alert.severity}</p>
          <p>Urgency: ${alert.urgency}</p>
          <p>Areas: ${alert.areas}</p>
          <p>Expires: ${alert.expires}</p>
        </div>
        `;
      }*/
  };
  // Images
  const showImage = () => {
    const isDay = Number(isDayElement.innerHTML);
    const imageName = icons[isDay];
  
    document.querySelector(".isDay").src = `./assets/${imageName}`;
  };
  showImage();

  async function fetchWeather() {
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json();
        updateCurrentDOM(data);
        console.log(data)
    } else {
        console.log("Something went wrong in CurrentLOGIC.");
    }
  };
  const forecastElement = document.querySelector(".weatherForecast");
  const today = new Date();
  
  async function fetchForecast() {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        const forecastday = data.forecast.forecastday;
        const location = data.location.name;
    
        // Cycle through the Forecast Array
        for (let i = 0; i < 3; i++) {
          const date = new Date(forecastday[i].date);
    
          // Start day after Today.
          if (date > today && date <= (new Date()).setDate(today.getDate() + 3)) {
            const dayOfWeek = date.getDay();
            const dayOfMonth = date.getDate();
            const dayOfWeekString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];
    
            forecastElement.innerHTML += `
              <div class="forecastDiv">
                <h2>
                ${dayOfWeekString} ${dayOfMonth}</h2>
                <ul>
                <li> 
                <li>In ${location}</li>
                High: <span class="highSpan">${forecastday[i].day.maxtemp_f}°F</span> 
                Low: <span class="lowSpan">${forecastday[i].day.mintemp_f}°F</span>
                </li>
                  <li id="forecastConditions">${forecastday[i].day.condition.text}</li>
                </ul>
              </div>`;
          }
        }
      } else {
        console.log("Something went wrong.");
      }
    };
console.log(url)
fetchWeather()
fetchForecast()