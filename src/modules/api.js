function api() {
  const apiKey = "6fe5d9b89c10408d90d143901232806";
  const input = "06021";
  const options = {
    key: apiKey,
    q: input,
    days: 4,
    aqi: true,
    alerts: true,
  };
  const url = `http://api.weatherapi.com/v1/forecast.json?${Object.entries(options).map(([key, value]) => `${key}=${value}`).join('&')}`;
  return url;
}

export default api;