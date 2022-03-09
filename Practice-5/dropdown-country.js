//---------Function for fetching API-----------------\\
const spinner = document.getElementById("spinner");

const getCountry = () => {
  spinner.removeAttribute("hidden", true);
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => {
      spinner.setAttribute("hidden", true);
      countryNames(data);
    });
};
getCountry();
const countryNames = (countriesData) => {
  const dropdownMenu = document.getElementById("dropdown-menu");
  for (const element of countriesData) {
    const option = document.createElement("option");
    option.innerHTML = `${element.name} (${element.nativeName})`;
    dropdownMenu.appendChild(option);
  }
};
