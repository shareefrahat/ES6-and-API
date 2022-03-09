const inputField = document.getElementById("input-field");
const alertMsg = document.getElementById("alert");
const spinner = document.getElementById("spinner");
const searchResult = document.getElementById("search-result");

alertMsg.style.display = "none";

spinner.setAttribute("hidden", true);

document.getElementById("search-btn").addEventListener("click", function () {
  const inputText = inputField.value;
  inputField.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
  spinner.removeAttribute("hidden", true);
  alertMsg.style.display = "none";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.meals === null) {
        searchResult.innerHTML = "";
        alertMsg.style.display = "block";
        spinner.setAttribute("hidden", true);
      } else {
        alertMsg.style.display = "none";
        getMeals(data.meals);
        spinner.setAttribute("hidden", true);
      }
    });
});

const getMeals = (items) => {
  searchResult.innerHTML = "";
  items.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="${
                          meal.strMealThumb
                        }" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title text-success">${
                              meal.strMeal
                            }</h4>
                            <p class="card-text">${meal.strInstructions.slice(
                              0,
                              200
                            )}</p>
                            <button onclick="getDetails('${
                              meal.strMeal
                            }')" class="btn btn-success">Details</button>
                        </div>
                    </div>
    `;
    searchResult.appendChild(div);
  });
};

const getDetails = (items) => {
  console.log(items);
};
