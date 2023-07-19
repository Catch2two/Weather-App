function api() {
  const apiKey = "6fe5d9b89c10408d90d143901232806";
  const city = "Hartford"
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=yes&alerts=yes`;
return url;
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newInput = document.querySelector("input[name='input']").value;
  city = newInput;
  console.log(api(city));
});

export default api;