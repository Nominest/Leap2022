let rootElement = document.getElementById("root");
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "450px";
let r = Math.floor(Math.random(1) * 255);
let g = Math.floor(Math.random(1) * 255);
let b = Math.floor(Math.random(1) * 255);
let n = Math.floor(Math.random(0, 1) * 16);
for (let i = 0; i < 16; i++) {
  let newDiv = document.createElement("div");
  rootElement.appendChild(newDiv);
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.border = "1px solid white";
  newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  if (n == i) {
    newDiv.style.backgroundColor = `rgb(${r + 30}, ${g + 30}, ${b + 30})`;
  }
}
