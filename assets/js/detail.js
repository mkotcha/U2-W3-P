window.onload = () => {
  loadItem();
};

const printItem = data => {
  if (document.getElementById("spinner")) document.getElementById("spinner").remove();
  const img = document.querySelector(".container img");
  img.src = data.imageUrl;
  img.alt = data.name;
  document.getElementById("id").innerText += data._id;
  document.getElementById("name").innerText += data.name;
  document.getElementById("description").innerText += data.description;
  document.getElementById("brand").innerText += data.brand;
  document.getElementById("img-url").innerText += data.imageUrl;
  document.getElementById("price").innerText += data.price;
  document.getElementById("user-id").innerText += data.userId;
  document.getElementById("created").innerText += data.createdAt;
  document.getElementById("updated").innerText += data.updatedAt;
  document.getElementById("version").innerText += data.__v;
  document.getElementById("modify").href += data._id;
};
