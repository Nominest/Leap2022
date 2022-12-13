document.getElementsByTagName("div")[0].innerHTML =
  "<div class = 'classtext' style = ' color : aqua; '> <h1> Hello </h1> </div>";
// document.getElementsByTagName("div")[0].style.backgroundColor = "green";

let newDiv = document.getElementsByTagName("div")[0];

newDiv.style.border = "10px solid black";
newDiv.style.width = "200px";
let r = Math.floor(Math.random(1) * 255);
setInterval(function () {
  for (i = 0; i < 255; i++) {
    r += Math.floor(Math.random(1) * 255);
  }
  newDiv.style.backgroundColor = rgb(`${r}`, 125, 54);
}, 20);
