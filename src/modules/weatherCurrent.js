const apiKey = "6fe5d9b89c10408d90d143901232806"

async function fetchWeather() {
    const city = "06021"
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    const response = await fetch(url);

    if (response.status === 200) {
        const data = await response.json();
        // Time
        const dayNight = data.current.is_day;
        const updateTime = data.current.last_updated;
        // Temperature
        const temperatureF = data.current.temp_f;
        const temperatureC = data.current.temp_c;
        const feelsLikeF = data.current.feelslike_f;
        const feelsLikeC = data.current.feelslike_c;
        const humidity = data.current.humidity;
        // Wind Info
        const windDir = data.current.wind_dir;
        const windGustM = data.current.gust_mph;
        const windGustK = data.current.gust_kph;
        // Location
        const city = data.location.name;
        const state = data.location.region;
        const latitude = data.location.lat;
        const longitude = data.location.lon;
        // Details
  
        // DOM Selectors

        // Location
        const regionElement = document.querySelector(".weatherState")
        regionElement.innerHTML = state;
        const cityElement = document.querySelector(".weatherCity")
        cityElement.innerHTML = city;
        const latElement = document.querySelector(".weatherLatitude")
        latElement.innerHTML = `Lat: ${latitude}`;
        const lonElement = document.querySelector(".weatherLongitude")
        lonElement.innerHTML = `Lon: ${longitude}`;

        // Temperature
        const temperatureELement_F = document.querySelector(".weatherUnitF")
        temperatureELement_F.innerHTML = `${temperatureF}°F`;
        const temperatureELement_C = document.querySelector(".weatherUnitC")
        temperatureELement_C.innerHTML = `${temperatureC}°C`;
        const feelsLikeElement_F = document.querySelector(".weatherFeelsLikeF")
        feelsLikeElement_F.innerHTML = `Feels Like: ${feelsLikeF}°F`;
        const feelsLikeElement_C = document.querySelector(".weatherFeelsLikeC")
        feelsLikeElement_C.innerHTML = `Feels Like: ${feelsLikeC}°C`;
        // If the temperature is above 90f or 32c, make it red/Glow
        if (temperatureF > 90 || temperatureC > 32.2) {
            temperatureELement_F.style.color = "red";
            temperatureELement_F.style.textShadow = "0 0 5px orange";
        }
        
        if (feelsLikeF > 90 || feelsLikeC > 32.2) {
            feelsLikeElement_F.style.color = "red";
            feelsLikeElement_F.style.textShadow = "0 0 5px orange";
        }
        
        if (temperatureC > 32.2) {
            temperatureELement_C.style.color = "red";
            temperatureELement_C.style.textShadow = "0 0 5px orange";
        }
        
        if (feelsLikeC > 32.2) {
            feelsLikeElement_C.style.color = "red";
            feelsLikeElement_C.style.textShadow = "0 0 5px orange";
        }
        // Humidity
        const weatherHumidity = document.querySelector("#weatherHumidity")
        weatherHumidity.innerHTML = `Humidity: ${humidity}`
        // Wind Info
        
        // Weather Description


        return data;
    } else {
        alert("Something went wrong.");
    }
};
console.log("Current Weather Loaded")
export {fetchWeather};