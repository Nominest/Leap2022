//Example1: print text function
function greet() {
  console.log("Hello there");
}
greet();
greet();

greet();

//result: Hello there

//Example2:
function greetingwithName(name) {
  let i = 10;
  console.log("Hello" + name + i);
}
greetingwithName("nkk");

//example3: Return ==>
function myFun(p1, p2, p3) {
  return p1 + p2 + p3;
}
let result = myFun(1, 2, 3);
console.log(result);

//example4: sum

function result1(number1, number2) {
  return number1 + number2;
}
let result2 = result1(1, 2);
console.log("Sum is " + result2);

//example5:
let a = function (nn) {
  return "hello" + nn;
};
console.log(a("ran"));

//example6: same with example5
let b = (nameIs) => {
  return "Hello" + nameIs;
};
console.log(b("run"));
