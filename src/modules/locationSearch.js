function handleSearch() {
    const searchInput = document.querySelector(".searchInput");
    const goButton = document.querySelector("button");
  
    goButton.addEventListener("click", () => {
      const city = searchInput.value;
      fetchWeather(city);
    });}

export { handleSearch }