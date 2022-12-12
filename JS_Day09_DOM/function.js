// // id-r
// document.getElementById("root").innerText = "Hello";
// //inner html yalgaa
// document.getElementById("root").innerHTML = "<h1 class='dummy'>Hello</h1>";
//
// document.getElementById("root").innerHTML =
//   "<div class='dummy' style='color:aqua;'><h1 >Hello</h1></div";
// //class
// document.getElementsByClassName("dummy")[0].innerText = "World"; //class --> elements
// generating class
// document.getElementsByTagName("body")[0].innerHTML =
//   "<div class = 'darkmode'> Hello Dark Mode </div>";
// //img src
// document.getElementsByTagName("img")[0].src =
//   "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";

// //changing img width
// document.getElementsByTagName("img")[0].width = "200";

// //ul li element nemev
// let rootElement = document.getElementById("root");
// let ulElement = document.createElement("ul");
// rootElement.appendChild(ulElement);

// for (let i = 0; i < 10; i++) {
//   let liElement = document.createElement("li");
//   liElement.innerText = i.toString();
//   ulElement.appendChild(liElement);
// }

//shatar 2for
let rootElement = document.getElementById("root");
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "850px";

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let newDiv = document.createElement("div");
    rootElement.appendChild(newDiv);
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    if ((i + j) % 2 == 0) {
      newDiv.style.backgroundColor = "grey";
    }
  }
}

let i = 0;
const myInterval = setInterval(function () {
  i++;
  rootElement.innerText = i;
  if (i == 10) {
    clearInterval(myInterval);
  }
  console.log(i);
}, 100);

// //shatar 2for
// let rootElement = document.getElementById("root");
// rootElement.style.display = "flex";
// rootElement.style.flexWrap = "wrap";
// rootElement.style.width = "850px";

// for (let i = 0; i < 64; i++) {
//   let newDiv = document.createElement("div");
//   rootElement.appendChild(newDiv);
//   newDiv.style.width = `${i}px`;
//   newDiv.style.height = `${i}px`;
//   newDiv.style.border = "1px solid black";
//   if ((i + (Math.floor(i / 8) % 2)) % 2 == 0) {
//     newDiv.style.backgroundColor = "grey";
//   }
// }

// let i = 0;
// setInterval(function () {
//   i++;
//   rootElement.innerText = i;
//   console.log(i);
// }, 10);
