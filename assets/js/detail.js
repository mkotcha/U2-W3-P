const URL = "https://striveschool-api.herokuapp.com/api/product/";
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTIyMGMwMzRmZjAwMTQwM2Y0Y2QiLCJpYXQiOjE2OTI5NDY5NzYsImV4cCI6MTY5NDE1NjU3Nn0.p9fB1--hZFAaALaGtJPRblqlUTyfBsBz1cNxD_Nckwo";
const id = new URLSearchParams(window.location.search).get("id");

window.onload = () => {
  loadItem();
};

const loadItem = () => {
  fetch(URL + id, { headers: { authorization } })
    .then(resp => resp.json())
    .then(data => printItem(data))
    .catch(err => console.log(err));
};

const printItem = data => {
  console.log(data);

  const img = document.querySelector(".container img");
  img.src = data.imageUrl;
  img.alt = data.name;
  console.log(img);
  document.getElementById("id").innerText += data._id;
  document.getElementById("name").innerText += data.name;
  document.getElementById("description").innerText += data.description;
  document.getElementById("brand").innerText += data.brand;
  document.getElementById("img-url").innerText += data.imageUrl;
  document.getElementById("created").innerText += data.createdAt;
  document.getElementById("updated").innerText += data.updatedAt;
  document.getElementById("version").innerText += data.__v;
  document.getElementById("modify").href += data._id;
};
