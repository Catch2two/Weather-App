import { fetchWeather, fetchForecast } from "./weatherAPI";
const appendWeather = (() => {
    function currentForecast() {
        // Updated time
        const lastUpdateElement = document.querySelector(".weatherUpdateTime")
        lastUpdateElement.innerHTML = `${updateTime}`;
        const conditionElement = document.querySelector(".condition")
        conditionElement.innerHTML = `Currently ${condition}`
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


        // **STYLE** If the temperature is above 90f or 32c, make it red/Glow
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
    };
    
    const forecastWeather = (() => {
        const forecastElement = document.querySelector(".weatherForecast");
        const today = new Date();

    for (let i = 0; i < 3; i++) {
            const date = new Date(forecastday[i].date);
        if (date > today) {
            const dayOfWeek = date.getDay();
            const dayOfMonth = date.getDate();
            const dayOfWeekString = ["Sunday", 
            "Monday", 
            "Tuesday", 
            "Wednesday", 
            "Thursday", 
            "Friday", 
            "Saturday"]
            [dayOfWeek];

        forecastElement.innerHTML +=
        `
        <h2>${dayOfWeekString} ${dayOfMonth}</h2>
        <h4> in ${data.location.name} </h4>
        <ul>
            <li>High: ${forecastday[i].day.maxtemp_f}°F</li>
            <li>Low: ${forecastday[i].day.mintemp_f}°F</li>
            <li>Conditions: ${forecastday[i].day.condition.text}</li>
        </ul>
        `;
}}})});
appendWeather()
export default dom;