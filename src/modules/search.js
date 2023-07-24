const apiKey = "6fe5d9b89c10408d90d143901232806";

const search = async (city) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Something went wrong.");
  }
};

export {search};