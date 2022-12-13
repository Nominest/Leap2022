let rootElement = document.getElementById("root");
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "450px";
let r = Math.floor(Math.random(1) * 255);
let g = Math.floor(Math.random(1) * 255);
let b = Math.floor(Math.random(1) * 255);
let z = Math.floor(Math.random(r - 100));
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    let newDiv = document.createElement("div");
    rootElement.appendChild(newDiv);
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (j <= 4 && i <= 4) {
      newDiv.style.backgroundColor = `rgb(${z}, ${g}, ${b})`;
    }
  }
}
