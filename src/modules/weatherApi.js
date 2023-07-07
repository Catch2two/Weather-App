const apiKey = "6fe5d9b89c10408d90d143901232806"

async function fetchWeather() {
    const city = "Hartford"
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
        const humidity = data.current.feelslike_c;
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
        latElement.innerHTML = latitude;
        const lonElement = document.querySelector(".weatherLongitude")
        lonElement.innerHTML = longitude;
        // Temperature
        const temperatureELement_F = document.querySelector(".weatherUnitF")
        temperatureELement_F.innerHTML = `${temperatureF}°F`;
        const temperatureELement_C = document.querySelector(".weatherUnitC")
        temperatureELement_C.innerHTML = `${temperatureC}°C`;
        const feelsLikeElement_F = document.querySelector(".weatherFeelsLikeF")
        feelsLikeElement_F.innerHTML = feelsLikeF;
        // Weather Description


        return data;
    } else {
        return null;
    }
};

fetchWeather()

export {fetchWeather};