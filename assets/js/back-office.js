document.addEventListener("DOMContentLoaded", event => {
  document.getElementById("my-form").addEventListener("submit", addItem);
  document.getElementById("reset").addEventListener("click", resetForm);

  const myModal = document.getElementById("myModal");
  const myInput = document.getElementById("myInput");

  if (id) {
    document.getElementById("delete-confirm").addEventListener("click", deleteItem);
    document.getElementById("delete").classList.remove("d-none");
    loadItem();
  }
});

const addItem = event => {
  event.preventDefault();
  create();
};

const printItem = data => {
  document.getElementById("name").value = data.name;
  document.getElementById("description").value = data.description;
  document.getElementById("brand").value = data.brand;
  document.getElementById("image-url").value = data.imageUrl;
  document.getElementById("price").value = data.price;
  document.querySelector("#my-form button").innerText = "update";
};

const create = async () => {
  const myItem = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("image-url").value,
    price: parseInt(document.getElementById("price").value),
  };

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

      if (id) {
        alert("Item id: " + newItemObj._id + " UPDATED!");
        window.open(`detail.html?id=${newItemObj._id}`, "_self");
      } else {
        alert("Item CREATED!, id: " + newItemObj._id);
        // event.target.reset();
        window.open(`detail.html?id=${newItemObj._id}`, "_self");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = () => {
  fetch(URL + id, { method: "DELETE", headers: { authorization } })
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
      alert(data.name + " id: " + data._id + " DELETED!");
      window.open("back-office.html", "_self");
    })
    .catch(err => console.log(err));
};

const resetForm = event => {
  // document.getElementById("my-form").reset();
  window.open("back-office.html", "_self");
};
