// function doSomething(func1, func2) {
//   if (now.getHours() < 18) {
//     func1();
//   } else {
//     func2;
//   }
// }

// function printHello() {
//   console.log("Hello");
// }

// function printBye() {
//   console.log("Bye");
// }

// const now = new Date();
// doSomething(printHello, printBye);

// // ex1
// let custButton = document.getElementById("root");
// custButton.addEventListener("click", () => {
//   console.log("Clicked");
// });
// custButton.innerText = "Click me";

// //ex2
// let custButton = document.getElementById("root");
// const something = () => {
//   console.log("clicked");
// };
// custButton.addEventListener("click", something);
// custButton.innerText = "click me";

// // scroll percentage 1
// let body = document.querySelector("body");
// let perC = document.getElementById("root");
// window.addEventListener("scroll", () => {
//   const height =
//     (window.scrollY /
//       (document.documentElement.scrollHeight -
//         document.documentElement.clientHeight)) *
//     100;
//   document.getElementById("per").innerHTML = `perentage: ${height}%`;
//   //   console.log(window.scrollY);
//   //   console.log(window.innerHeight);
// });

// scroll percentage 2
let body = document.querySelector("body");
let perC = document.getElementById("root");
window.addEventListener("scroll", () => {
  const height = Math.round(window.scrollY / 10.3);
  document.getElementById("per").innerHTML = `Percentage: ${height}%`;
});

// // scroll percentage 3 not working
// let body = document.querySelector("body");
// let perC = document.getElementById("root");
// window.addEventListener("scroll", () => {
//   let percent = Math.floor(
//     (window.scrollY * 100) /
//       (document.querySelector("body").clientHeight - window.innerHeight)
//   );
//   document.querySelector("#percentage").innerHTML = `${percent}%`;
// });
