const URL = "https://striveschool-api.herokuapp.com/api/product/";
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTIyMGMwMzRmZjAwMTQwM2Y0Y2QiLCJpYXQiOjE2OTI5NDY5NzYsImV4cCI6MTY5NDE1NjU3Nn0.p9fB1--hZFAaALaGtJPRblqlUTyfBsBz1cNxD_Nckwo";

const id = new URLSearchParams(window.location.search).get("id");

const loadItem = () => {
  fetch(URL + id, { headers: { authorization } })
    .then(handleErrors)
    .then(resp => resp.json())
    .then(data => printItem(data))
    .catch(err => console.log(err));
};

const loadItems = () => {
  fetch(URL, { headers: { authorization } })
    .then(handleErrors)
    .then(resp => resp.json())
    .then(data => data.forEach(elm => printItem(elm)))
    .catch(err => console.log(err));
};

function handleErrors(resp) {
  if (!resp.ok) {
    console.log(resp.status);
    let customError = "";

    switch (resp.status) {
      case 401:
        customError = "Not Permitted - Please check yuor key";
        break;
      case 404:
        customError = "Not Found 404";
        break;
      case 500:
        customError = "General Server Error";
        break;

      default:
        customError = resp.statusText;
        break;
    }

    appendAlert(customError, "danger");
    throw Error(customError);
  }
  return resp;
}

const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  document.getElementById("liveAlertPlaceholder").append(wrapper);
};
