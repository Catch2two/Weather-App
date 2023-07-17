import api from "./api.js";

const url = api();

async function fetchForecast() {
 
    const response = await fetch(url);
    // Call API
    if (response.status === 200) {
        const data = await response.json();
        const forecastday = data.forecast.forecastday;

        // DOM Selectors

        const forecastElement = document.querySelector(".weatherForecast");
        const today = new Date();
    // Cycle through the Forecast Array
    for (let i = 0; i < 3; i++) {
        const date = new Date(forecastday[i].date);
    // Start day after Today.
    if (date > today) {
        const dayOfWeek = date.getDay();
        const dayOfMonth = date.getDate();
        const dayOfWeekString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];

        forecastElement.innerHTML += `
        <div>
        <h2>${dayOfWeekString} ${dayOfMonth}</h2>
        <h4> in ${data.location.name} </h4>
        <ul>
            <li>High: ${forecastday[i].day.maxtemp_f}°F</li>
            <li>Low: ${forecastday[i].day.mintemp_f}°F</li>
            <li>Conditions: ${forecastday[i].day.condition.text}</li>
        </ul>
        </div>`;
    }
    }
    console.log(data)
    return data.forecast.forecastday;
    }
  };

  export {fetchForecast}