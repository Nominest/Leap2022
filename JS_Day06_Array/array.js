// let studentAges = [10, 20, 30, 33, 22, 10];
// console.log(studentAges[0]);
// console.log(studentAges.length - 1);
// for (let i = 0; i < studentAges.length; i++) {
//   studentAges[i]++;
// }
// console.log(studentAges);

// //
// let students = ["fffff", "dulmaa", "sdvfv", "dorj"];
// let i = 0;
// while (i <= students.length) {
//   if (students[i] && students[i][0] === "d") {
//     console.log(students[i]);
//   }
//   i++;
// }

// //
// if (2) {
//   console.log("dd");
// } else {
//   console.log("else");
// }

// longest name
let names = ["Batsukh", "Narandelgerekh", "Nomin", "Murun", "Bayanmunkh"];
let maxName = "";
for (i = 0; i < names.length; i++) {
  if (maxName.length < names[i].length) {
    maxName = names[i];
  }
}
console.log(maxName.length);

// //longest name
// let q = 1;
// let names = ["Batsukh", "Narandelgerekh", "Nomin", "Murun", "Bayanmunkh"];
// let longest = names[0];
// let max = longest.length;
// while (q < longest.length) {
//   if (max < names[q].length) {
//     longest = names[q];
//     max = names[q].length;
//   }
//   q++;
// }
// console.log(names);

// //
// let stuNames = ["fffff", "dulmaa", "sdvfv", "dorj"];
// let dNAmes = [];
// let w = 0;
// let j = 0;
// while (w < stuNames.length) {
//   if (stuNames[w][0] === "d") {
//     dNAmes[j] = stuNames[w];
//     j++;
//   }
//   w++;
// }
// console.log(dNAmes);

// // let
// for (let i = 0; i < x.length; i++) {
//   for (let j = 0; j < x[0].length; j++) {
//     console.log(x[i][j]);
//   }
// }

let Jan01_1970 = new Date();
console.log(Jan01_1970);
