let foods = [
  {
    name: "baked beans",
    price: 1.4,
    image: "beans.jpg",
    type: "vegetables",
  },
  {
    name: "hot dogs",
    price: 1.99,
    image: "hotdogs.jpg",
    type: "meat",
  },
  {
    name: "spam",
    price: 2.85,
    image: "spam.jpg",
    type: "meat",
  },
  {
    name: "refried beans",
    price: 0.99,
    image: "refried.jpg",
    type: "vegetables",
  },
  {
    name: "kidney beans",
    price: 0.58,
    image: "kidney.jpg",
    type: "vegetables",
  },
  {
    name: "garden peas",
    price: 0.52,
    image: "gardenpeas.jpg",
    type: "vegetables",
  },
  {
    name: "mushy peas",
    price: 0.58,
    image: "mushypeas.jpg",
    type: "vegetables",
  },
  {
    name: "corned beef",
    price: 2.39,
    image: "cornedbeef.jpg",
    type: "meat",
  },
  {
    name: "tomato soup",
    price: 1.4,
    image: "tomatosoup.jpg",
    type: "soup",
  },
  {
    name: "chopped tomatoes",
    price: 0.45,
    image: "tomato.jpg",
    type: "vegetables",
  },
  {
    name: "chicken noodle soup",
    price: 1.89,
    image: "chickennoodle.jpg",
    type: "soup",
  },
  {
    name: "carrot and coriander soup",
    price: 1.49,
    image: "carrotcoriander.jpg",
    type: "soup",
  },
];

// filter: une ni 1s baga buh utguudiig gargaj irne "arrow function returns boolean"
let cheap = foods.filter((food) => food.price < 1);
console.log(cheap);

// sort: neriig a,b,c daraalald oruulna "arrow function returns number (positive || negative)"
let names = ["boldoo", "bataa", "gerlee", "altai"];
let sortedNAmes = names.sort();
console.log(names);

// map: zuvhun uniig gargaj irsen "arrow function returns anything"
let prices = foods.map((food) => food.price);
console.log(prices);

// foods dotroh hamgiin ehnii une 1s ih baga esehiig custom filter hiisen returns: false
function customFilter(a) {
  const cheap = a.price < 1;
  return cheap;
}
console.log(customFilter(foods[0]));

// custom sort output: a = 23, b = 1, a = 5, b = 23 ...
let numbers = [1, 23, 5, 45, 24, 765, 4];
function customSort(a, b) {
  console.log("a = ", a);
  console.log("b = ", b);
}
numbers.sort(customSort);

// price, type 2g l uldeev: [ 1.4, 'vegetables' ],[ 1.99, 'meat' ],...
function customMap(food) {
  return [food.price, food.type];
}
let newnewFoods = foods.map(customMap);
// let newnewFoods1 = foods.map(customMap()); // do not do that
// let newnewFoods2 = foods.map((food) => customMap(food));
console.log(newnewFoods);

// another way : [ 1.4, 'vegetables' ],[ 1.99, 'meat' ],...
let newnewFoods3 = foods.map((food) => [food.price, food.type]);
console.log(newnewFoods3);

//  { ner: 'baked beans', une: 1.4 },...
let chapp = foods.map((food) => {
  return { ner: food.name, une: food.price };
});
console.log(chapp);
