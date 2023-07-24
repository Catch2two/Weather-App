const form = document.querySelector("form");
const cityInput = document.querySelector("#cityInput");

function handleSubmit(event) {
    event.preventDefault();
    const city = cityInput.value;
  
    // Update the URL for the weather forecast data.
    const url = `http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=${city}&days=3&aqi=yes&alerts=yes`;
  
    // Log the URL to the console.
    console.log(url);
  }  
  
  form.addEventListener("submit", handleSubmit);

  export { handleSubmit }