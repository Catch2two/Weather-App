function handleSearch() {
    const searchInput = document.querySelector(".searchInput");
    const searchButton = document.querySelector("#searchButton");
  
    searchButton.addEventListener("click", () => {
      const zipcode = searchInput.value;
      fetchWeather(zipcode);
    });}

export { handleSearch }