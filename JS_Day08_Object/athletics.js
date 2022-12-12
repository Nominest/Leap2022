let athletics = [
  {
    name: "gonchig",
    age: 15,
    country: "Mongolia",
    record: [10, 20, 30],
  },
  {
    name: "dorj",
    age: 25,
    country: "Mongolia",
    record: [100, 20, 30, 40],
  },
  {
    name: "dulmaa",
    age: 35,
    country: "USA",
    record: [100, 20, 30, 200],
  },
  {
    name: "Bat",
    age: 20,
    country: "USA",
    record: [100, 20],
  },
  {
    name: "Bold",
    age: 21,
    country: "Korea",
    record: [10, 20, 300],
  },
];

getAllInfo(athletics);

function getAllNames(list) {
  let names = [];
  for (i = 0; i < list.length; i++) {
    names.push(list[i].name);
  }

  return names;
}
function getAvgSec(list) {
  let avgList = [];
  for (i = 0; i < list.length; i++) {
    //list.length = 5 (hunii too)
    let sum = 0;
    for (j = 0; j < list[i].record.length; j++) {
      sum += list[i].record[j];
    }

    let personNewObj = {
      name: list[i].name,
      avg: sum / list[i].record.length,
    };
    avgList.push(personNewObj);
  }
  return avgList;
}

function getAvgAge(list) {
  let sum = 0;
  for (i = 0; i < list.length; i++) {
    sum += list[i].age;
  }
  return Math.round(sum / list.length);
}

function getAllInfo(list) {
  let names = getAllNames(list);
  let avgAge = getAvgAge(list);
  let avgSec = getAvgSec(list);
  let sum = 0;
  for (i = 0; i < avgSec.length; i++) {
    sum += avgSec[i].avg;
  }
  console.table(avgSec);
  console.log("Avarage Speed:\t", sum / avgSec.length);
  console.log("Avarage Age:\t", avgAge);
  console.log("All Names: \t", names);
  return;
}
