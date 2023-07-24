import api from "./api.js";

const url = api();
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

  export {fetchForecast}