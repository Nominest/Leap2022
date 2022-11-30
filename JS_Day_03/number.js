console.log(Number.isInteger(0)); //buhel too eseh true
console.log(Number.isInteger(0.9)); //buhel too eseh false

// tofixed() butarhai toond oron uguh method -- ur dun: 1234.23
let number = 1234.2355567;
let displayNumber = number.toFixed(2);
console.log(number);
console.log(displayNumber);

// toonii oron yalgahiin tuld dooguur zuraas ashiglaj bolno
const budget = 1_000_000_000;
console.log(budget);

// Math.PI 3.14

// Math.abs(*) -- * haruulna modul -- returns number in () positive
console.log(Math.abs(-4)); // output: 4

// Math.ceil() -- buhel utgiig avna gehdee butarhai orson l bol daraagiin utga ruu orno
console.log(Math.ceil(1.0008)); // output: 2
console.log(Math.ceil(-7.004)); //output: -7

// Math.round() -- toimloh
console.log(Math.round(0.9)); // output: 1
console.log(Math.round(5.95), Math.round(4.45)); // output: 6 4

//Math.max() -- max utga oloh
console.log(Math.max(1, 3, 2)); //output: 3

//Math.pow() --zereg
console.log(Math.pow(2, 3)); // output: 8

//Math.random() --
console.log(Math.ceil(Math.random() * 6)); // 0 gesen songolt garch irne
console.log(Math.floor(Math.random() * 6) + 1); // 1-6n hoorond utguud  garch irne

//random between
consoleconsole.log(
  Math.floor(Math.random() * Math.abs(a - b)) + Math.min(a, b)
);
