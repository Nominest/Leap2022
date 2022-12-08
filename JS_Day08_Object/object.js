//arrow function
let fun = () => {
  console.log("person");
};

//function
function getPerson() {
  console.log("person");
}

let person = {
  firstName: "Naran",
  lastName: "Dorj",
  Age: 22,
  Score: [88, 99, 77],
  isMarried: false,
  shout: () => {
    console.log("woow"); //return hiivel undefined garch irehgui
  },
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  address: {
    country: "Mongolia",
    city: "Ulaanbaatar",
  },
};
console.log(person.Age);
console.log(person["firstName"]);
console.log(person.fullName());
console.log(person.shout()); //function uchir haalt

//related to address
let person1 = {
  firstName: "Naranbayar",
};
let person2 = person1;
person2.firstName = "Erdene";
console.log(person1.firstName);
console.log(person2.firstName);
//outup: person1,2 name  Erdene

//
let person3 = [100, 30, 50];
let person4 = person3;
person4[0] = 100;
console.log(person3);

//spread operator array bol []
let person9 = [100, 30, 50];
let person48 = [...person9];
person9[0] = 100;
console.log(person9);
console.log(person48);

//spread operator object bol {}
person5 = { ...person1 };
person5.firstName = "Erdene";
console.log(person5);
console.log(person1);

//methods
let person11 = {
  firstName: "Naranbayar",
  Age: 50,
};
let person20 = {
  firstName: "Nomin",
};

console.log(Object.values(person11)); // output: [ 'Naranbayar', 50 ]
console.log(person20.firstName);

//athlets
let athlets = [
  {
    Name: "Will",
    Age: 22,
    Record: [34, 56, 88],
  },
  {
    Name: "Bill",
    Age: 29,
    Record: [56, 45, 90, 76],
  },
  {
    Name: "Willow",
    Age: 12,
    Record: [12, 53, 34, 56, 12],
  },
];
getAll(athlets);
function avg(list) {
  let sum = 0;
  for (i = 0; i < list.length; i++) {
    let sum = 0;
    for (j = 0; j < list[i].Record.length; j++) {
      sum += list[i].Record[j];
    }
  }
  return sum / list.length;
}
function getAll(list) {
  let avgSpeed = avg(list);
}
console.log(avg);
