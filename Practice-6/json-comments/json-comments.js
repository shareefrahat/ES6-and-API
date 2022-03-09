//--------------Fetching JSON Placeholder comments------------------\\

const loadComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => getComments(data));
};

loadComments();

const getComments = (data) => {
  const commentContainer = document.getElementById("comment-container");
  for (const element of data) {
    const commentCard = document.createElement("div");
    commentCard.classList.add("card", "col", "p-4", "m-md-2", "shadow");
    commentCard.innerHTML = `
                <div class="card-header">
                  <h2 id="comment-name" class="text-primary">${element.name}</h2>
                  <h6 id="comment-email" class="text-secondary">${element.email}</h6>
                </div>
                <div class="card-body">
                  <p>${element.body}</p>
                </div>
                <div class="card-footer">
                  <p class="text-danger">Rank: ${element.id}</p>
                </div>`;
    commentContainer.appendChild(commentCard);
  }
};
