const searchInput = document.querySelector(".searchInput");

const handleSearch = () => {
  const zipcode = searchInput.value;
  const city = zipcode.substring(0, 5);
  const url = `http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=${city}&days=4&aqi=yes&alerts=yes`;
  fetchWeather(url);
};

searchInput.addEventListener("input", handleSearch);