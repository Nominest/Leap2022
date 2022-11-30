// //about \ white space
// let myString = " single quotes' double quotes \" ";
// console.log(myString);

// // about \ begin in new line
// let babyshark = "baby shark \nbaby shark";
// console.log(babyshark);

// // about \t multi space -- tab
// let babyshark = "baby shark \tbaby shark";
// console.log(babyshark);

// // length --property usegnii toog toolno space included
// let babyshark = "baby shark \tbaby shark";
// console.log(babyshark.length);

// //charAt method (*) dahi utgiig duudna
// let babyshark = "1234567";
// console.log(babyshark.charAt(0));

// //!!method--zaaval ardaa utgan haalttai--shar bhd   property -- tsenher ungutei, ardaa utga avahgui

// // charAt() & [] yalgaagui
// let babyshark = "1234567";
// console.log(babyshark[0]);

// // hamgiin suuliin utgiig yaj oloh -- length oloh, -1
// let babyshark = "1234567";
// console.log(babyshark.length - 1);

// // UpperCase & lowercase
// let babyshark = "baby shark baby shark";
// console.log(babyshark.toLocaleUpperCase());
// console.log(babyshark.toLocaleLowerCase());

// // Concat merge
// let firstName = "Oyu";
// let fullName = firstName.concat(" ", "Nom");
// console.log(fullName);
// console.log(firstName);

// // substring
// let str = "JavaScript String";
// console.log(str.substring(0, 10));
// console.log(str.substring(11, 18));

// // indexof() bairshil oloh
// // is arilgav
// let str = "This is a string";
// console.log(str.indexOf("is"));
// let firstpart = str.substring(0, str.indexOf("is"));
// let lastpart = str.substring(str.indexOf("is") + "is".length, str.length);
// console.log(lastpart);
// str = firstpart.concat(lastpart);
// firstpart = str.substring(0, str.indexOf("is"));
// lastpart = str.substring(str.indexOf("is") + "is".length, str.length);
// str = firstpart.concat(lastpart);
// console.log(str);

// // trim method
// let rawstring = "Hi   ";
// let strippedstring = rawstring.trim();
// console.log(strippedstring);

// // number to string
let number = 2000;
let strNum = number.toString();
console.log(typeof number);
console.log(typeof strNum);
