const lastUpdateElement = document.querySelector(".weatherUpdateTime");
const isDayElement = document.querySelector(".isDay");
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

// Update the DOM with the weather data
function updateCurrentDOM(weatherData) {
  lastUpdateElement.innerHTML = weatherData.current.last_updated;
  isDayElement.innerHTML = weatherData.current.is_day;
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

  // Start Alert
  startScrollingText();
}
// Scroll the text from left to right
function startScrollingText() {
  const textElement = document.querySelector("#weatherAlert");
  const textWidth = textElement.offsetWidth;
  const scrollAmount = textWidth * 0.1;

  setInterval(function() {
    textElement.scrollLeft += scrollAmount;

    if (textElement.scrollLeft >= textWidth) {
      textElement.scrollLeft = 10;
    }
  }, 100);
}

export { updateCurrentDOM, startScrollingText };