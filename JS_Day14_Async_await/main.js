// returns promise output:  Promise { 1 }
async function fryEgg() {
  return 1;
}
let result = fryEgg();
console.log(result);

//returns 1 output: 1
async function toast() {
  return 1;
}
let test = toast();
test.then((test) => {
  //then dotor function baih
  console.log(test);
});

// output: a, b, final
async function fryEggs() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  return promise;
}
console.log("a");
console.log("b");
fryEggs();
console.log("final");

async function printResult() {
  let resul = await fryEggs();
  console.log(resul);
}

// // output: a, b, final, done!
// async function fryEg() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
//   let results = await promise; // энд 1 сэкүнд хүлээнэ
//   console.log(results);
// }
// console.log("a");
// console.log("b");
// fryEg();
// console.log("final");
