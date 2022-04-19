/*
--------------------
Definition and Usage
--------------------

map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array.

*/



let arr = [10, 20, 30, 40, 60, 80];


// // WAP to get double of all elements of the array using map
// let doubleArr = arr.map((ele, index) => {
//     return ele * 2
// })

// console.log(doubleArr)
 
// let plush = 0;
// let plushArray = arr.map((ele)=>{
//      plush = plush + ele;
// })
// console.log(plush)

// WAP to get square of all elements of the array using map

// let newArr = arr.map((ele, index) => {
//     return ele * ele
// })

// console.log(newArr)

let numArray = arr.map( (ele) => ele * 2 )
console.log(numArray)



// With forEach()
let mainCom = arr.forEach((e) =>{
    console.log(e * 2)
})

