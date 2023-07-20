function api() {
  const apiKey = "6fe5d9b89c10408d90d143901232806";
  const city = "Hartford"
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=yes&alerts=yes`;
return url;
}

const form = document.querySelector("form");
const cityInput = document.querySelector("#cityInput")
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value;

  const url = `http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=${city}&days=3&aqi=yes&alerts=yes`;
  console.log(url)
});

export default api;