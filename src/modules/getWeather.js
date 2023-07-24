function getWeather(location) {
  const apiKey = "6fe5d9b89c10408d90d143901232806";
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=yes&alerts=yes`;
  const weatherElement = document.getElementsByClassName('.weatherInfo')

  fetch(apiUrl)
  .then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }
  })
  .then(data => {
    const weatherData = processWeatherData(data);
    console.log(data);
    displayWeatherData(weatherData)
  })
  .catch(error => {
    weatherElement.innerHTML = `<h3>Error Input</h3>`
    console.error('Error:', error);
  })
}