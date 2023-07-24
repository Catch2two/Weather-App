import api from "./api.js";
import search from "./search.js";

const forecastElement = document.querySelector(".weatherForecast");

const fetchForecast = async (city) => {
  const data = await search(city);
  const forecastday = data.forecast.forecastday;

  // Cycle through the Forecast Array
  for (let i = 0; i < 3; i++) {
    const date = new Date(forecastday[i].date);

    // Start day after Today.
    if (date > new Date() && date <= (new Date()).setDate(new Date().getDate() + 3)) {
      const dayOfWeek = date.getDay();
      const dayOfMonth = date.getDate();
      const dayOfWeekString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];

      forecastElement.innerHTML += `
        <div class="forecastDiv">
          <h2>
            ${dayOfWeekString} ${dayOfMonth}</h2>
          <ul>
          <li>
          High: <span class="highSpan">${forecastday[i].day.maxtemp_f}°F</span> 
          Low: <span class="lowSpan">${forecastday[i].day.mintemp_f}°F</span>
          </li>
            <li id="forecastConditions">${forecastday[i].day.condition.text}</li>
          </ul>
        </div>`;
    }
  }
};

const searchBar = document.querySelector("#cityInput");

searchBar.addEventListener("input", (event) => {
  const city = event.target.value;
  fetchForecast(city);
});