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
    }
  
};
// Images
const showImage = () => {
  const isDay = Number(isDayElement.innerHTML);
  const imageName = icons[isDay];

  document.querySelector(".isDay").src = `./assets/${imageName}`;
};

  /*
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
*/
export { updateCurrentDOM };
showImage();