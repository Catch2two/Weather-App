const apiKey = "6fe5d9b89c10408d90d143901232806"

async function fetchForecast() {
    const city = "06021"
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=yes`
    const response = await fetch(url);

    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        return null;
    }
};
console.log("Forecast Loaded")
export { fetchForecast }