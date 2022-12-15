let newDiv = document.getElementsByTagName("div")[0];
newDiv.style.border = "10px solid black";
newDiv.style.width = "200px";
newDiv.style.height = "200px";
let r = Math.floor(Math.random(1) * 255);
let g = Math.floor(Math.random(1) * 255);
let b = Math.floor(Math.random(1) * 255);
setInterval(function () {
  let newDivw = document.getElementsByTagName("div");
  newDivw.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}, 20);
