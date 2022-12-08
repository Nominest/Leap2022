// //for durem
// // for (initialize; condition; update)
// for (let i = 1; i <= 10; i++) {
//   //to dos while condition is true
//   for (let w = 1; w < 10; w++) {
//     console.log(i, " ", w);
//   }
// }

// // 1-9 haritsaatai box
// let output = "";
// for (let x = 1; x < 10; x++) {
//   for (let y = 1; y < 10; y++) {
//     output += y + " ";
//   }
//   output += "\n";
//   debugger;
// }
// console.log(output);

// //
// let output1 = " ";
// let n = 9;
// for (let row = 1; row < n; row++) {
//   for (let col = 1; col < n; col++) {
//     output1 += "*" + " ";
//   }
//   output1 += "\n";
// }
// console.log(output1);

// hollow box
let output1 = "";
let n = 9;
for (let row = 1; row < n; row++) {
  for (let col = 1; col < n; col++) {
    if (row == 1 || row == n - 1 || col == 1 || col == n - 1) {
      output1 += "*";
    } else {
      output1 += " ";
    }
  }

  output1 += "\n";
}
console.log(output1);

// //
// let output = "";
// let n = 5;
// for (let row = 1; row < n; row++) {
//   for (let col = 1; col < n; col++) {
//     if (col == 1 || row == n - 1) {
//       output += "*" + " ";
//     }
//   }
//   output += "\n";
// }
// console.log(output);

// //
// let number = 1234567897654321;
// console.log(number.charAt(number.length - 3));
// console.log(number.substring(1, 3));
// number =
//   number.substring(0, number.length - 3) +
//   "_" +
//   number.substring(number.length - 3, number.length);
// console.log(number);

// // pass

// let password = "123";
// let input;

// while (password != input) {
//   input = prompt("Password");
// }

// // Break
// let number;
// while (true) {
//   number = prompt("Enter phone number:");
//   let firstChar = number.charAt(0);
//   number = Number(number);
//   if (Number.isInteger(number) && (firstChar == "9" || firstChar == "8")) {
//     break;
//   }
// }

// //Continue
// let i = 0;
// while (i < 10) {
//   i++;
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// //prime
// let n = 10;
// let prime = true;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     prime = false;
//   }
// }
// if (prime) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

//prime with break

// let n = 10;
// let prime = true;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     prime = false;
//     break;
//   }
// }
// if (prime) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
