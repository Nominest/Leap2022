let sec = 0;
let min = 0;
let hour = 0;
setInterval(function () {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  rootElement.innerText = `00:${min < 10 ? "0" : ""}${min}:${sec}`;
}, 1);
