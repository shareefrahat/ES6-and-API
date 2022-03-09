const inputField = document.getElementById("input-field");
const searchBtn = document.getElementById("search-btn");
const alertMsg = document.getElementById("alert");
const spinner = document.getElementById("spinner");
const searchResult = document.getElementById("search-result");
const displayModal = document.getElementById("display-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

alertMsg.style.display = "none";
spinner.setAttribute("hidden", true);

searchBtn.addEventListener("click", function () {
  const inputText = inputField.value;
  inputField.value = "";

  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputText}`;
  spinner.removeAttribute("hidden", true);
  alertMsg.style.display = "none";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.player === null) {
        searchResult.innerHTML = "";
        alertMsg.style.display = "block";
        spinner.setAttribute("hidden", true);
      } else {
        alertMsg.style.display = "none";
        getPlayers(data.player);
        spinner.setAttribute("hidden", true);
      }
    });
});

const getPlayers = (players) => {
  inputField.value = "";
  searchResult.innerHTML = "";
  for (const player of players) {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="${player.strThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${player.strPlayer}</h5>
                    <p class="text-secondary">${player.strSport} Player</p>
                    <button onclick="getDetails('${player.strPlayer}')"id="details-btn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
</div>
</div>`;
    searchResult.appendChild(div);
  }
};

const getDetails = (element) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${element}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => playerDetails(data.player[0]));
};

const playerDetails = (player) => {
  modalTitle.innerText = `${player.strPlayer}`;
  modalBody.innerHTML = `
  <p class="card-text"><b>Sport: </b>${player.strSport}</p>
  <p class="card-text"><b>Nationality: </b>${player.strNationality}</p>
  <p class="card-text"><b>Club: </b>${player.strTeam}</p>
  <p class="card-text"><b>Height: </b>${player.strHeight}</p>
  <p class="card-text"><b>Foot: </b>${player.strSide}</p>
  <p class="card-text"><b>Position: </b>${player.strPosition}</p>`;
};
