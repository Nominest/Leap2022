document.getElementsByTagName("div")[0].innerHTML =
  "<div class = 'classtext' style = ' color : aqua; '> <h1> Hello </h1> </div>";
document.getElementsByTagName("div")[0].style.backgroundColor = "green";

let newDiv = document.getElementsByTagName("div")[0];
let countwidth = 100;
let countheight = 200;
let r = Math.floor(Math.random(1) * 255);
let g = Math.floor(Math.random(1) * 255);
let b = Math.floor(Math.random(1) * 255);
newDiv.style.border = "10px solid black";
const myInterval = setInterval(function () {
  newDiv.style.width = `${countwidth}px`;
  newDiv.style.height = `${countheight}px`;
  countwidth++;
  countheight++;
  if (countwidth == 300) {
    clearInterval(myInterval);
  }
}, 1);
