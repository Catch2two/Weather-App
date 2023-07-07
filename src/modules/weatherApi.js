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
        // If the temperature is above 90f or 32c, make it red
        if (temperatureF > 90) {
            temperatureELement_F.style.color = "red";
        } else {
            // Calculate the gradient color based on the temperature
            const gradientColor = `linear-gradient(to right, red, rgba(255, 200, 0, 1 - (temperatureF / 32))`;
            temperatureELement_F.style.color = gradientColor;
        }

        if (feelsLikeF > 90) {
            feelsLikeElement_F.style.color = "red";
        } else {
            const gradientColor = `linear-gradient(to right, red, rgba(255, 200, 0, 1 - (feelsLikeF / 32))`;
            feelsLikeElement_F.style.color = gradientColor;
        }

        if (temperatureC > 32.2) {
            temperatureELement_C.style.color = "red";
        } else {
            const gradientColor = `linear-gradient(to right, red, rgba(255, 200, 0, 1 - (temperatureC / 32.2))`;
            temperatureELement_C.style.color = gradientColor;
        }

        if (feelsLikeC > 32.2) {
            feelsLikeElement_C.style.color = "red";
        } else {
            const gradientColor = `linear-gradient(to right, red, rgba(255, 200, 0, 1 - (feelsLikeC / 32.2))`;
            feelsLikeElement_C.style.color = gradientColor;
        }
        // Humidity
     
        // Weather Description


        return data;
    } else {
        return null;
    }
};

fetchWeather()

export {fetchWeather};