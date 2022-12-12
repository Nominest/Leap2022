let countab = 1;
while (countab <= 10) {
  console.log(countab);
  countab = countab + 1;
}

//Register use ascii table
let word = "abc123";
console.log(word.charAt(3));

// counting how many a's
let text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let countqw = 0;
let countA = 0;
while (countqw < text.length) {
  if (text[countqw] == "a" || text[countqw] == "A") {
    countA = countA + 1;
  }
  countqw = countqw + 1;
}
console.log(countA);

// 100s baga 3t huvaagddag too
let num = 100;
let countrt = 0;
while (num > 0) {
  if (num % 3 == 0) {
    countrt++;
  }
  num--;
}
console.log(countrt);

//1-100 sum
let num100 = 1;
let sum = 0;
while (num100 <= 100) {
  sum++;
  num100++;
}
console.log(sum);

// //break 2 while
// let x = 10;
// let count = 1;
// let output = " ";
// while (x > 0) {
//   let y = 10;
//   while (y > 0) {
//     output = output + count + "\t"; // output = output + count + " "
//     if (count % 20 == 0) output += "\n"; // output = output + /n
//     y--;
//     count++;
//   }
//   x--;
// }
// console.log(output);

//break 2 while
let x = 10;
let count = 1;
let output = " ";
while (x > 0) {
  let y = 10;
  while (y > 0) {
    output = output + count + "\t"; // output = output + count + " "
    if (count % 20 == 0) output += "\n"; // output = output + /n
    y--;
    count++;
  }
  x--;
}
console.log(output);
