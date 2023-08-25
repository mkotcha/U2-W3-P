const URL = "https://striveschool-api.herokuapp.com/api/product/";
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTIyMGMwMzRmZjAwMTQwM2Y0Y2QiLCJpYXQiOjE2OTI5NDY5NzYsImV4cCI6MTY5NDE1NjU3Nn0.p9fB1--hZFAaALaGtJPRblqlUTyfBsBz1cNxD_Nckwo";
const id = new URLSearchParams(window.location.search).get("id");

document.addEventListener("DOMContentLoaded", event => {
  console.log(document.querySelector("#my-form"));
  console.log("dio cane maiale");
  document.querySelector("#my-form").addEventListener("submit", addIte);

  if (id) {
    document.querySelector("form#my-form button:last-child").addEventListener("click", deleteItem);
    document.querySelector("form#my-form button:last-child").classList.remove("d-none");
  }
});

const addItem = event => {
  event.preventDefault();
  console.log(event.target);
  create(event);
};

const printItem = id => {
  fetch(URL + id, { headers: { authorization } })
    .then(response => response.json())
    .then(data => {
      document.getElementById("name").value = data.name;
      document.getElementById("description").value = data.description;
      document.getElementById("brand").value = data.brand;
      document.getElementById("image-url").value = data.imageUrl;
      document.getElementById("price").value = data.price;
      document.querySelector("#my-form button").innerText = "update";
    })
    .catch(err => console.log(err));
};

const create = async event => {
  const myItem = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("image-url").value,
    price: parseInt(document.getElementById("price").value),
  };
  console.log(myItem);
  try {
    console.log(URL + (id ? id : ""));
    const resp = await fetch(URL + (id ? id : ""), {
      method: id ? "PUT" : "POST",
      body: JSON.stringify(myItem),
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
    });

    if (resp.ok) {
      const newItemObj = await resp.json();
      console.log(newItemObj);

      if (id) {
        alert("Item con l'id: " + newEventObj._id + " è stato modificato con successo!");
      } else {
        alert("Item creato con successo, l'id è: " + newItemObj._id);
        event.target.reset();
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = () => {
  fetch(URL + id, { method: "DELETE", headers: { authorization } })
    .then(response => response.json())
    .then(data => alert("hai eliminato " + data.name + "con id: " + data._id))
    .catch(err => console.log(err));
};
