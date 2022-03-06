// array: Collection of values

// How to declare array
let emptyArray = []; // declare an empty array
let arr1 = [10, 20, 30, 40, 60]; // declare an array with values
let arr2 = [40, 30, 50, 0, 70, 55, 45, 60, 80, 90]; // declare an array with values
const fruits = ["Apple", "Banana", "Orange"]; // declare an array with values

// console.log(arr)

{
// indexing
// console.log(arr[11])

// length
// console.log(arr.length)

// toString()
// console.log(fruits.toString()) // convert array to string

// join()
// console.log(fruits.join("*-*")) // convert array to string with a separator

// push() : add an element to the end of the array
// fruits.push("Mango");
// console.log(fruits)

// pop() : remove an element from the end of the array
// fruits.pop();
// console.log(fruits)

// unshift() : add an element to the beginning of the array
// fruits.unshift("Kiwi");
// console.log(fruits)

// shift() : remove an element from the beginning of the array
// fruits.shift();
// console.log(fruits)

// splice() : add or remove elements from the array, 
//arguments: index, how many elements to remove, elements to add
// fruits.splice(1, 0, "Kiwi", "Grapes"); // add an element at index 1
// console.log(fruits)


// fruits.splice(1, 2, "Kiwi", "Grapes"); // add an element at index 1, remove 2 elements, add 2 elements
// console.log(fruits)

// fruits.splice(1, 2)
// console.log(fruits)

// slice
// let slice = fruits.slice(1, 3); // slice from index 1 to index 3 (not included)
// console.log(slice)

// let arr = arr1.slice(1, 4)
// console.log(arr)

}

// sort
// let sortedArray = arr2.sort(); // sort the array
// console.log(sortedArray)