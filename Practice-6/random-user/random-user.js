//--------------Fetching Random user API--------------------\\

const spinner = document.getElementById("spinner");
const loadData = () => {
  spinner.removeAttribute("hidden", true);
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      getProfile(data);
      spinner.setAttribute("hidden", true);
    });
};

loadData();

const getProfile = (element) => {
  console.log(element.results[0]);
  const container = document.getElementById("container");
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
            <div class="card-header">
                <img src="${element.results[0].picture.large}" alt="" class="card-img">
                <h4 class="text-primary text-center my-2">${element.results[0].name.first} ${element.results[0].name.last}</h4>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Profile Details
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <div class="card-body">
                        <p><b>Name: </b>${element.results[0].name.first} ${element.results[0].name.last}</p>
                        <p><b>Gender: </b>${element.results[0].gender}</p>
                        <p><b>Age: </b>${element.results[0].dob.age}</p>
                        <p><b>Phone: </b>${element.results[0].phone}</p>
                        <p><b>Email: </b>${element.results[0].email}</p>
                    </div>
                    <div class="card-footer">
                        <em>${element.results[0].location.street.name}, ${element.results[0].location.state},
                            ${element.results[0].location.country}</em>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `;
  container.appendChild(card);
};

const userBtn = document.getElementById("user-btn");
userBtn.addEventListener("click", function () {
  location.reload();
});
