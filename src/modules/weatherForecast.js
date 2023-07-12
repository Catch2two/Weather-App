const apiKey = "6fe5d9b89c10408d90d143901232806"

async function fetchForecast() {
    const city = "06021";
    const url = `http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=${city}&days=4&aqi=yes&alerts=yes`;
    const response = await fetch(url);
    // Call API
    if (response.status === 200) {
      const data = await response.json();
      const forecastday = data.forecast.forecastday;
  
    // DOM Selectors
  
    const forecastElement = document.querySelector(".weatherForecast");
    const today = new Date();
    
    for (let i = 0; i < 3; i++) {
      const date = new Date(forecastday[i].date);
      // Start day after Today.
      if (date > today) {
        const dayOfWeek = date.getDay();
        const dayOfMonth = date.getDate();
        const dayOfWeekString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];
        
        forecastElement.innerHTML += `
          <h2>${dayOfWeekString} ${dayOfMonth}:</h2>
          <p>High: ${forecastday[i].day.maxtemp_f}°F</p>
          <p>Low: ${forecastday[i].day.mintemp_f}°F</p>
          <p>Conditions: ${forecastday[i].day.condition.text}</p>
        `;
      }
    }
      return data.forecast.forecastday;
    }
  };
  console.log("Forecast Loaded")
  export { fetchForecast };