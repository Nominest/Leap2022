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

// let i = 0;
// const myInterval = setInterval(function () {
//   i++;
//   rootElement.innerText = i;
//   if (i == 10) {
//     clearInterval(myInterval);
//   }
//   console.log(i);
// }, 100);