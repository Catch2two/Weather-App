const city = "";

function handleSearch() {
  const searchInput = document.querySelector(".city");
  city = searchInput.value;
}

export { handleSearch };