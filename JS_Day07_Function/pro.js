let number1 = parseFloat(prompt("First"));
let number2 = parseFloat(prompt("Second"));

let result2 = add(number1, number2);
console.log(result2);
console.log("Sum is " + result2);
function add(num1, num2) {
  return num1 + num2;
}
