const apiKey = "6fe5d9b89c10408d90d143901232806";
function api(q = "Hartford") {
  const options = {
    key: apiKey,
    q: q,
    days: 3,
    aqi: true,
    alerts: true,
  };
  const url = `http://api.weatherapi.com/v1/forecast.json?${Object.entries(options).map(([key, value]) => `${key}=${value}`).join('&')}`;
  return url;
}

function changeInput(newInput) {
  window.input = String(newInput);
  console.log(api(window.input));
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newInput = document.querySelector("input[name='input']").value;
  changeInput(newInput);
  console.log(api(newInput));
});

export default api;