import api from "./api.js";
import { updateCurrentDOM } from "./currentDOM.js";
const url = api();

async function fetchWeather() {
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json();
        updateCurrentDOM(data);
        console.log(data)
    } else {
        console.log("Something went wrong.");
    }
};

console.log("Current Weather Loaded")
export {fetchWeather};