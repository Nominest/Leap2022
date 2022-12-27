let btn = document.getElementById("allbtn");
let toyota = document.getElementById("toyota");
let lexus = document.getElementById("lexus");
let root = document.getElementById("root");
let saveBtn = document.getElementById("savebtn");
// let inputModel = document.getElementById("mark");
root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.gap = "10px";

allbtn.addEventListener("click", () => {
  root.innerHTML = '';
    fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      
      res.map((car) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${car.model}</h5>
          <p class="card-text">${car.brand}</p>
          <a href="#" class="btn btn-primary">More</a>
        </div>
      </div>`;
        root.appendChild(newCard);
      });
    })
    .catch((e) => console.log("e: ", e));
  
});


toyota.addEventListener("click", () => {
  root.innerHTML = '';
    fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
            res.map((car) => {
        if(car.brand === "Toyota") {
          let newCard = document.createElement("div");
          newCard.innerHTML = `<div class="card" style="width: 18rem;">
          <img src="${car.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${car.model}</h5>
            <p class="card-text">${car.brand}</p>
            <a href="#" class="btn btn-primary">More</a>
          </div>
        </div>`;
        root.appendChild(newCard);
        } 
        
      });
    })
    .catch((e) => console.log("e: ", e));
});

lexus.addEventListener("click", () => {
  root.innerHTML = '';
    fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
            res.map((car) => {
        if(car.brand === "Lexus") {
          let newCard = document.createElement("div");
          newCard.innerHTML = `<div class="card" style="width: 18rem;">
          <img src="${car.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${car.model}</h5>
            <p class="card-text">${car.brand}</p>
            <a href="#" class="btn btn-primary">More</a>
          </div>
        </div>`;
        root.appendChild(newCard);
        } 
        
      });
    })
    .catch((e) => console.log("e: ", e));
});











// toyota.addEventListener("click", () => {
//   root.innerHTML = '';
//   fetch("http://localhost:3333/api/cars")
//     .then((res) => res.json())
//     .then((res) => {fetch("http://localhost:3333/api/cars")
//     .then((res) => res.json())
//     .then((res) => {
      
//       res.map((car) => {
//         let newCard = document.createElement("div");
//         newCard.innerHTML = `<div class="card" style="width: 18rem;">
//         <img src="${car.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${car.model}</h5>
//           <p class="card-text">${car.brand}</p>
//           <a href="#" class="btn btn-primary">More</a>
//         </div>
//       </div>`;
//         root.appendChild(newCard);
//       });
//     })
//     .catch((e) => console.log("e: ", e));
//       res.map((car) => {
//         if(car.brand === "Toyota") {
//           let newCard = document.createElement("div");
//           newCard.innerHTML = `<div class="card" style="width: 18rem;">
//           <img src="${car.image}" class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">${car.model}</h5>
//             <p class="card-text">${car.brand}</p>
//             <a href="#" class="btn btn-primary">More</a>
//           </div>
//         </div>`;
//         root.appendChild(newCard);
//         } 
        
//       });
//     })
//     .catch((e) => console.log("e: ", e));
// });

// saveBtn.addEventListener("click", () => {
//     fetch('http://localhost:3333/api/cars', {
//     method: 'POST',
//     body: JSON.stringify({ 
//       model: document.getElementById("model").value,
//       brand: document.getElementById("brand").value,
//       image: document.getElementById("image").value })
//     })

// });
