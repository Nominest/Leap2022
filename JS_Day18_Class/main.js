let allbtn = document.getElementById("allbutton");
let root = document.getElementById("root");
let saveBtn = document.getElementById("button");
let addUser = document.getElementById("addUser");
let deleteUser = document.getElementById("deleteUser");

root.style.display = "flex";
root.style.flexWrap = "wrap";
//add new user
addUser.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let surName = document.getElementById("surName").value;
  let balance_id = document.getElementById("balance_id").value;
  let balance = document.getElementById("balance").value;
  let balance_type = document.getElementById("balance_type").value;
  fetch("http://localhost:3333/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      surName: surName,
      balance_id: balance_id,
      balance: balance,
      balance_type: balance_type,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
});

// fetch("http://localhost:3333/api/users")
//   .then((res) => res.json())
//   .then((res) => {
//     res.map((user) => {
//       let newCard = document.createElement("div");
//       newCard.innerHTML = `<div class="card" style="width: 20rem;">
//           <div class="card-body">
//           <h5 class="card-title">${user.name} ${user.surName}</h5>
//             <p class="card-text">Balance Amount: ${user.balance}</p>
//             <p class="card-text">Balance ID : ${user.balance_id}</p>
//           </div>
//         </div>`;
//       root.appendChild(newCard);
//     });
//   })
//   .catch((e) => console.log("e: ", e));

// input multiplier
saveBtn.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((res) => {
      root.innerHTML = "";
      res.map((user) => {
        if (user.balance_type === true) {
          let newCard = document.createElement("div");
          newCard.innerHTML = `<div class="card" style="width: 20rem;">
          <div class="card-body">
          <h5 class="card-title">${user.name} ${user.surName}</h5>
            <p class="card-text">Balance Amount: ${
              user.balance * input * 1.1
            } </p>
            <p class="card-text">Balance ID : ${user.balance_id}</p>
          </div>
        </div>`;
          root.appendChild(newCard);
        } else {
          let newCard = document.createElement("div");
          newCard.innerHTML = `<div class="card" style="width: 20rem;">
            <div class="card-body">
            <h5 class="card-title">${user.name} ${user.surName}</h5>
              <p class="card-text">Balance Amount: ${
                user.balance * input * 1.01
              } </p>
              <p class="card-text">Balance ID : ${user.balance_id}</p>
            </div>
          </div>`;
          root.appendChild(newCard);
        }
      });
    })
    .catch((e) => console.log(res));
});

// //delete existing user
// deleteUser.addEventListener("click", () => {
//   let balance_id = document.getElementById("balance_id").value;
//   fetch("http://localhost:3333/api/users", {
//     method: "DELETE",
//     body: JSON.stringify({
//       balance_id: balance_id,
//     }),
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// });
// fetch("http://localhost:3333/api/users")
//   .then((res) => res.json())
//   .then((res) => {
//     res.map((user) => {
//       let newCard = document.createElement("div");
//       newCard.innerHTML = `<div class="card" style="width: 20rem;">
//             <div class="card-body">
//             <h5 class="card-title">${user.name} ${user.surName}</h5>
//               <p class="card-text">Balance Amount: ${user.balance}</p>
//               <p class="card-text">Balance ID : ${user.balance_id}</p>
//             </div>
//           </div>`;
//       root.appendChild(newCard);
//     });
//   })
//   .catch((e) => console.log("e: ", e));
