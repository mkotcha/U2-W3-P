const URL = "https://striveschool-api.herokuapp.com/api/product/";
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTIyMGMwMzRmZjAwMTQwM2Y0Y2QiLCJpYXQiOjE2OTI5NDY5NzYsImV4cCI6MTY5NDE1NjU3Nn0.p9fB1--hZFAaALaGtJPRblqlUTyfBsBz1cNxD_Nckwo";

window.onload = () => {
  loadItems();
};

const loadItems = () => {
  fetch(URL, { headers: { authorization } })
    .then(handleErrors)
    .then(resp => resp.json())
    .then(data => data.forEach(elm => printItem(elm)))
    .catch(err => console.log(err));
};

const printItem = elm => {
  if (document.getElementById("spinner")) document.getElementById("spinner").remove();
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
                      <p class="card-text fw-bold">
                        ${elm.price} €
                      </p>
                      <a href="back-office.html?id=${elm._id}" class="btn btn-primary btn-sm">edit</a>
                      <a href="detail.html?id=${elm._id}" class="btn btn-primary btn-sm">more info</a>          
                    </div>
                  </div>`;
  document.querySelector("main > .container > .row").appendChild(div);
};

function handleErrors(response) {
  if (!response.ok) {
    console.log(response);
    appendAlert(response.statusText, "danger");
    throw Error(response.statusText);
  }
  return response;
}

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};
