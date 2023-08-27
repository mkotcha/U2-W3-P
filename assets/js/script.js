window.onload = () => {
  loadItems();
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
