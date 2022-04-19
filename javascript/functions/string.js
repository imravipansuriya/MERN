/* 
=================

0.1 .length     // The length property returns the length of a string, The length property of an empty string is 0.

0.2 .charAt     // The charAt() method returns the character at a specified index (position) in a string.

0.3 .indexOf    // index of any substring

0.4 .substring  // The substring() method extracts characters from start to end (exclusive).

0.5 .slice      // The slice() method returns selected elements in an array, as a new array.

0.6 .replace    // replace any substring

0.7 .toUpperCase 

0.8 .toLowerCase

0.9 .indexing

10  .split      // split a string into an array of substrings
=================


*/
// let carName1 = "Volvo";

// It's hot outside
// let carName1 = "It's is a car";
// let carName1 = 'It"s is a car';

// let carName1 = 'It\'s is a car';

// let carName1 = "It\"s is a car";

// I said to you, "It's is a car"

let str = "Hello my name"
console.log(str)

let demo = "Hello World"
console.log(demo)

// ===================================================
// substring: if there is a string, then its any part will be a subsrting of the string.
// ===================================================

// console.log(str)

// ===================================================
// length
// ===================================================

// console.log(str.length)

console.log(demo.length)

// ===================================================
// character at any index
// ===================================================

// let charAtIndex2 = str.charAt(1);
// console.log(charAtIndex2)

let demoindex = demo.charAt(1);
console.log(demoindex);

let demoindex1 = demo.charAt();
console.log(demoindex1);

let demoindex2 =demo.charAt(2);
console.log(demoindex2);

// ===================================================
// index of any substring
// ===================================================

/* 
        "Hello world"
index =  012345678910
 */

// let indexOfMy = str.indexOf("my"); // index of the first occurence of the substring
// console.log(indexOfMy)

let demoindex3 = demo.indexOf("World");
console.log(demoindex3);

let demoindex4 = demo.indexOf("d");
console.log(demoindex4);

// ===================================================
// find any substring
// ===================================================

// let subsrting = str.substring(3, 12); // substring from index 3 to index 12 (not included)
// console.log(subsrting)
// let subsrting = str.substring(3);     // substring from index 3 to end of the string
// console.log(subsrting)
// let subsrting = str.substring();      // retue the whole string
// console.log(subsrting)

let demoindex5 = demo.substring(5, 11) // ( world)
console.log(demoindex5)

let demoindex6 = demo.substring(5, 10); //( worl)
console.log(demoindex6);

// ===================================================
// slice any string
// ===================================================

// let slice = str.slice(3, 12); // substring from index 3 to index 12 (not included)
// console.log(slice)
// let slice = str.slice(); // substring from index 3 to the end
// console.log(slice)
// let slice = str.slice(-6, -3);
// console.log(slice)

let demoslice = demo.slice(0, 5)
console.log(demoslice);

let demoslice1 = demo.slice(5, 11);
console.log(demoslice1);

let demoslice2 = demo.slice(0);
console.log(demoslice2);

let demoslice3 = demo.slice(-11, -1);
console.log(demoslice3);

// ===================================================
// replace any substring
// ===================================================

// let replace = str.replace("Hello", "Hi");
// console.log("Final:", replace)

let demoreplace = demo.replace("Hello", "Hii");
console.log(demoreplace);

let demoreplace1 = demo.replace("World", "Mobile");
console.log(demoreplace1);

// ===================================================
// to upper case
// ===================================================

// let upperCase = str.toUpperCase();
// console.log(upperCase);

let demouppercase = demo.toUpperCase();
console.log(demouppercase);
 

// ===================================================
// to lower case
// ===================================================

// let lowerCase = str.toLowerCase();
// console.log(lowerCase)

let demolowercase =demo.toLowerCase();
console.log(demolowercase);

// ===================================================
// capitalize first letter
// ===================================================

// let capitalize = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(capitalize)

let democapitalize = demo.charAt(0).toUpperCase() + demo.slice(1);
console.log(democapitalize);

let demoindex7 = demo.charAt(0).toUpperCase() + demo.substring(1);
console.log(demoindex7);

// ===================================================
// indexing
// ===================================================

// console.log(str[6])

console.log(demo [0]);

// ===================================================
// split: split a string into an array of substrings
// ===================================================


let demosplit = demo.split("");
console.log(demosplit);

// let split = str.split("");
// console.log(split)



// Demo add shaprator in number
// let num = [123548798]

// let spliNum = num.toString().split('');
// console.log(spliNum)

// let getNum = spliNum.join(',')
// console.log(getNum)