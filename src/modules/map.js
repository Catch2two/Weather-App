const fetch = require("fetch");

async function getWeatherMap() {
  const url = "https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=Psow2bhhXW3wXODdK71eBtGvhORVt9O8";
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}

const data = await getWeatherMap();
if (data) {
  console.log(data);
} else {
  console.log("Error getting weather map.");
}