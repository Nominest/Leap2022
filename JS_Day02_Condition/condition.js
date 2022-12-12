// // ==; !==
// let a = 20;
// let b = 20;
// let answer = a == b;
// console.log(answer);

// let age = 21;
// if (age >= 21) {
//   console.log("Allowed");
// } else {
//   console.log("Not Allowed");
// }

// if example 2
// let myAge = 55;
// if (myAge < 11) {
//   console.log("baby");
// } else if (myAge < 18) {
//   console.log("teenager");
// } else if (myAge < 40) {
//   console.log("adult");
// } else {
//   console.log("old");
// }

// //challenge
// let day = 1;

// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } else if (day === 3) {
//   console.log("Wednesday");
// } else if (day === 4) {
//   console.log("Thursday");
// } else if (day === 5) {
//   console.log("Friday");
// } else if (day === 6) {
//   console.log("Saturday");
// } else if (day === 7) {
//   console.log("Sunday");
// } else {
//   console.log("Not found");
// }

// //challenge

// let day = prompt("Enter number");
// let weekname;

// if (day == 1) {
//   weekname = "Monday";
//   alert("Name :" + weekname);
// } else if (day == 2) {
//   weekname = "Tuesday";
//   alert("Name :" + weekname);
// } else if (day == 3) {
//   weekname = "Wednesday";
//   alert("Name :" + weekname);
// } else if (day == 4) {
//   weekname = "Thursday";
//   alert("Name :" + weekname);
// } else if (day == 5) {
//   weekname = "Friday";
//   alert("Name :" + weekname);
// } else if (day == 6) {
//   weekname = "Saturday";
//   alert("Name :" + weekname);
// } else if (day == 7) {
//   weekname = "Sunday";
//   alert("Name :" + weekname);
// } else {
//   weekname = "Not found";
//   alert("Name :" + weekname);
// }

// // || ali neg ni biylsen tohioldold
// let weekday = 10;

// if (weekday < 1 || weekday > 7) {
//   console.log("error");
// }

// && 2  nuhtsul zaaval biyleh
// let weekday = 1;
// let weekname;

// if (weekday >= 1 && weekday <= 7) {
//   if (weekday == 1) {
//     weekname = "Monday";
//   } else if (weekday == 2) {
//     weekname = "Tuesday";
//   }
// } else {
//   console.log("Error");
// }

// //switch
// let weekday = 8;

// switch (weekday) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Not a Day");
// }

// //switch break //if (weekday==1 || weekday==2 || weekday==3 || weekday==4 || weekday==5)
// let weekday = 6;

// switch (weekday) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("weekday");
//     break;
//   case 6:
//   case 7:
//     console.log("weekend");
//     break;
//   default:
//     console.log("Not a day");
// }

// //dasgal solution 1
// let x = 10,
//   y = 30,
//   z = 40;
// if (x > y) {
//   if (x > z) {
//     console.log(x, " n hamgiin ih");
//   } else {
//     console.log(z, " n hamgiin ih");
//   }
// } else {
//   if (y > z) {
//     console.log(y, " n hamgiin ih");
//   }
// }

// dasgal solution 2
// let x = 10,
//   y = 30,
//   z = 40;
// if (x > y && x > z) {
//   console.log(x, " n hamgiin ih");
// } else if (y > z) {
//   console.log(y, " n hamgiin ih");
// } else {
//   console.log(z, " n hamgiin ih");
// }
