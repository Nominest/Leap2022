let myname = "Nomin";
console.log(myname);

let mynumber1 = 15;
let mynumber2 = 20;
let mynumber3 = mynumber1 + mynumber2;
console.log(mynumber3);

//variables
// var lastname = "Nn";

//constant
const PI = 3.14;
//won't work for constant
//PI = 3.15;
console.log(PI);

let num1 = "13",
    num2 = "16";
let num3 = 45,
    num4 = 34;
let num5 = '"13"';
console.log(num1 + num2);
console.log(num3 + num4);
console.log(num1 + num4);
console.log(num5);

// bom
let inputNumber1 = prompt("enter your age");
console.log(2022 - inputNumber1);
let birthYear1 = 2022 - inputNumber1;
console.log("your birth year is " + birthYear1);

let inputNumber = 22;
let birthYear = 2022 - inputNumber;
console.log("your birth year is " + birthYear);

//number string
let a = 20;
let b = 25;
console.log("" + a + b);
console.log(a + "" + b);
console.log(a + " " + b);
console.log(a + b + "");

//20/7 uldegdel 6-g gargav
let num11 = 20;
let num12 = 7;
console.log(num11 % num12);

let num19 = 65;
console.log(num19 - (num19) / 10);

let num100 = prompt("Enter first number");
let num101 = prompt("Enter second number");
let num102 = parseFloat(prompt("Enter first number"));
let num103 = parseFloat(prompt("Enter second number"));

alert("niilber ni : " + (num102 + num103));
alert("ehnii toog 2dahi toond huvaahad uldegdel ni:" + (num100 % num101));

