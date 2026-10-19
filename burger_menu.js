const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

const searchButton = document.querySelector(".searc-button");
const searchBar = document.querySelector(".search-bar");

searchButton.addEventListener("click", () => {
  searchBar.hidden = !searchBar.hidden;

  if (!searchBar.hidden) {
    searchBar.focus();
  }
});
