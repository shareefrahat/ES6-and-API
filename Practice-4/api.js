//----------User Data Object-----------\\

function userData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

//----------User Names Onclick-----------\\

function userNames() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => getUserNames(data));
}

function getUserNames(data) {
  for (const text of data) {
    console.log(text.name);
  }
}

//----------User Names Add Event Listener-----------\\

document
  .getElementById("user-email-btn")
  .addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => getUserEmail(data));
  });

function getUserEmail(data) {
  for (const element of data) {
    console.log(element.email);
  }
}

//--------------Append li into ul---------------\\

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => getUserNameList(data));

function getUserNameList(data) {
  const ul = document.getElementById("list");
  for (const text of data) {
    const li = document.createElement("li");
    li.classList.add("style");
    li.innerHTML = `<strong>Name: </strong>${text.name}. 
    <br> 
    <strong>Email: </strong><a href="mailto:${text.email}">${text.email}</a>
    <br>
    <strong>Address: </strong><em>${text.address.city}</em>
    <br>
    <br>`;
    ul.appendChild(li);
  }
}
