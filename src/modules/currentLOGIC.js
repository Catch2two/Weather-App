import api from "./api.js";
import { updateDOM } from "./currentDOM.js";
const url = api();

async function fetchWeather() {
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json();
        updateDOM(data);
        console.log(data)
    } else {
        alert("Something went wrong.");
    }
};

console.log("Current Weather Loaded")
export {fetchWeather};