// array: Collection of values
/*

Arrays

var fruit = ["Banana", "Apple", "Pear"];

*/

// How to declare array
let emptyArray = []; // declare an empty array
let arr1 = [10, 20, 30, 40, 60]; // declare an array with values
let arr2 = [40, 30, 50, 0, 70, 55, 45, 60, 80, 90]; // declare an array with values
const fruits = ["Apple", "Banana", "Orange"]; // declare an array with values

// console.log(arr)

let demo = [];
let demo1 = [10, 20, 30, 40]
let demo2 = ["Apple", "Banana", "Orange"]

console.log(demo2)

/*===========================

01. indexing 
02. length
03. toString() convert array to string
04. join()     convert array to string with a separator
05. push()     add an element to the end of the array 
06. pop()      remove an element from the end of the array
07. unshift()  add an element to the beginning of the array
08. shift()    remove an element from the beginning of the array
09. splice()   add or remove elements from the array, 
               (arguments: index, how many elements to remove, elements to add)
10. slice()    slice from index 1 to index 3 (not included)
11. sort()     method sorts an array alphabetically
*/

{
// indexing
// console.log(arr[11])
console.log(demo1[2])
console.log(demo2[0])


// length
// console.log(arr.length)
console.log(demo2.length)
console.log(demo.length)
console.log(demo1.length)

// toString()
// console.log(fruits.toString()) // convert array to string
console.log(demo.toString())
console.log(demo1.toString())

// join()
// console.log(fruits.join("*-*")) // convert array to string with a separator
console.log(demo1.join("-"))


// push() : add an element to the end of the array
// fruits.push("Mango");
// console.log(fruits)
demo2.push("kiwi");
console.log(demo2)


// pop() : remove an element from the end of the array
// fruits.pop();
// console.log(fruits)
demo2.pop();
console.log(demo2);

demo1.pop();
console.log(demo1);

// unshift() : add an element to the beginning of the array
// fruits.unshift("Kiwi");
// console.log(fruits)

demo2.unshift("pineapple")
console.log(demo2)

// shift() : remove an element from the beginning of the array
// fruits.shift();
// console.log(fruits)

demo2.shift();
console.log(demo2)

// splice() : add or remove elements from the array, 
//arguments: index, how many elements to remove, elements to add

// fruits.splice(1, 0, "Kiwi", "Grapes"); // add an element at index 1
// console.log(fruits)

demo2.splice(2, 0, "Grapes", "Guava");
console.log(demo2)


// fruits.splice(1, 2, "Kiwi", "Grapes"); // add an element at index 1, remove 2 elements, add 2 elements
// console.log(fruits)

// fruits.splice(1, 2)
// console.log(fruits)


demo2.splice(2, 2, "Orange", "Apricots", "Papaya")
console.log(demo2)

// slice
// let slice = fruits.slice(1, 3); // slice from index 1 to index 3 (not included)
// console.log(slice)

// let arr = arr1.slice(1, 4)
// console.log(arr)

let demo3 = demo2.slice(0, 1)
console.log(demo3)

let demo4 = demo2.slice(0, 3)
console.log(demo4)
}


// sort
// let sortedArray = arr2.sort(); // sort the array   //The sort() method sorts an array alphabetically:
// console.log(sortedArray)


let demo5 = demo2.sort();
console.log(demo5)
