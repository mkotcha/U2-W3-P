const URL = "https://striveschool-api.herokuapp.com/api/product/";
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTIyMGMwMzRmZjAwMTQwM2Y0Y2QiLCJpYXQiOjE2OTI5NDY5NzYsImV4cCI6MTY5NDE1NjU3Nn0.p9fB1--hZFAaALaGtJPRblqlUTyfBsBz1cNxD_Nckwo";

window.onload = () => {
  loadItems();
};

const loadItems = () => {
  fetch(URL, { headers: { authorization } })
    .then(resp => resp.json())
    .then(data => data.forEach(elm => printItem(elm)))
    .catch(err => console.log(err));
};

const printItem = elm => {
  console.log(elm);
  const img = document.querySelector(".container img");
  img.src = data.imageUrl;
  img.alt = data.name;
  console.log(img);
  const div = document.createElement("div");
  div.style = "";
  div.innerHTML = `<div class="card ">
  <div class="ratio ratio-4x3">
                    <img src="${elm.imageUrl}" class="card-img-top " alt="${elm.name}" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${elm.name}</h5>
                        <p class="card-text">
                        ${elm.description}
                        </p>
                        <div class="d-flex">
                          <p class="card-text fw-bold me-auto">
                          ${elm.price} €
                          </p>
                          <a href="detail.html?id=${elm._id}" class="text-secondary">more info</a>
                        </div>
                    </div>
                    </div>`;
  document.querySelector("main > .container > .row").appendChild(div);
};
