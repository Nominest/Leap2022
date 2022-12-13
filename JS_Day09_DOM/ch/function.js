document.getElementsByTagName("div")[0].innerHTML =
  "<div class = 'classtext' style = ' color : aqua; '> <h1> Hello </h1> </div>";
document.getElementsByTagName("div")[0].style.backgroundColor = "green";

let newDiv = document.getElementsByTagName("div")[0];
let count = 100;
newDiv.style.border = "10px solid black";
const myInterval = setInterval(function () {
  newDiv.style.width = `${count}px`;
  count++;
  if (count == 300) {
    clearInterval(myInterval);
  }
}, 1);
