let btn = document.getElementById("allbtn");
let root = document.getElementById("root");
let saveBtn = document.querySelector(".savebtn");
let inputModel = document.getElementById("mark");
// let inputBrand = document.getElementById("brand");
// let inputImage = document.getElementById("image");

root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.gap = "20px";

btn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      res.map((car) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${car.model}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
        root.appendChild(newCard);
      });
    })
    .catch((e) => console.log("e: ", e));
});

// saveBtn.addEventListener("click", () => {
//   let inputValue = inputModel.value;
//   cars.push.inputValue;
// });
