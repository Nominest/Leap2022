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

getAllInfo(athlets);

function getNames(list) {
  let names = [];
  for (i = 0; i < list.length; i++) {
    names.push(list[i].name);
  }
  return names;
}

function getAvgSpeed(list) {
  let avgList = [];
  for (i = 0; i < list.length; i++) {
    let sum = 0;
    for (j = 0; j < list[i].Record.length; j++) {
      sum += list[i].Record[j];
    }
    let personNewObj = {
      name: list[i].name,
      avg: sum / list[i].Record.length,
    };
    avgList.push(personNewObj);
  }
  return avgList;
}

function getAvgAge() {
  return;
}

function getAllInfo(list) {
  let names = getNames(list);
  let avgSpeed = getAvgSpeed(list);
}
console.log(AvgSpeed);
// function avg(list) {
//   let sum = 0;
//   for (i = 0; i < list.length; i++) {
//     let sum = 0;
//     for (j = 0; j < list[i].Record.length; j++) {
//       sum += list[i].Record[j];
//     }
//   }
//   return sum / list.length;
// }
// function getAll(list) {
//   let avgSpeed = avg(list);
// }
// console.log(avg);
