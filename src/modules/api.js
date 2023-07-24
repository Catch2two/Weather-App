function api(cityInput) {
  const apiKey = "6fe5d9b89c10408d90d143901232806";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput}&days=3&aqi=yes&alerts=yes`;
  return url;
  
}
export default api;