let degree = 1,
  far = 33.8;
console.log(degree * far);

//Gegabytes to bits
// let Gegabytes = 15:
// let gb = 8000000000*bto

//2 orontoi huvsisagchiin ehnii oron
let num15 = 65;
console.log((num15 - (num15 % 10)) / 10);

//3 orontoi huvsisagchiin ehnii oron
let num1 = 985;
let num2 = (num1 - (num1 % 10)) / 10;
let num3 = (num2 - (num2 % 10)) / 10;
console.log(num3);

//null vs undefined
let newVar = null;
let newVar1;
console.log(newVar);
console.log(newVar1);

console.log(typeof num1);
let myNum2Type = typeof num2;
console.log("number 2 type is " + myNum2Type);

//string to number
let number = "15.5";
console.log(typeof number);
let realNumber = parseInt(number);
console.log(typeof realNumber);
console.log(realNumber);

// "Comments can make code readable"
// "Javascript lesson begin"
/* "Comments can make code readable" */

// Celsius to Fahrenheit
let cel = 2;
let celtofar = (cel * 9) / 5 + 32;
console.log(celtofar);

// Fahrenheit to celsius
let far = 1;
let fartocel = ((far - 32) * 5) / 9;
console.log(fartocel);
