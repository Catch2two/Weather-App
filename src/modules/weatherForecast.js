const apiKey = "6fe5d9b89c10408d90d143901232806"

async function fetchForecast() {
    const city = "06021";
    const url = `http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=${city}&days=5&aqi=yes&alerts=yes`;
    const response = await fetch(url);
    // Call API
    if (response.status === 200) {
      const data = await response.json();
      const forecastday = data.forecast.forecastday;
  
    // DOM Selectors
  
      const forecastElement = document.querySelector(".weatherForecast");
    // Forecast div
      for (const day of forecastday) {
        const date = new Date(day.date);

  
        forecastElement.innerHTML += `
          <h2>${date}:</h2>
          <p>High: ${day.high}°F</p>
          <p>Low: ${day.low}°F</p>
          <p>Conditions: ${day.conditions}</p>
        `;
      }
      return data;
    } else {
      return null;
    }
  };
  console.log("Forecast Loaded")
  export { fetchForecast };