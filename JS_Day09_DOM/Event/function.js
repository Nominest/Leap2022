let button = document.querySelector("button");
button.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = `rgb(${Math.floor(
    Math.random(1) * 255
  )}, ${Math.floor(Math.random(1) * 255)}, ${Math.floor(
    Math.random(1) * 255
  )})`;
});
