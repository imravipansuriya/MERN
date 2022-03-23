/**

The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.

*/


let arr = [1, 2, 5, 3, 11, 7, 8];

// WAP to find all even numbers from the array

let evenArr = arr.filter((ele, index) => {
    if (ele % 2 === 0) {
        return true
    } else {
        return false
    }
})

console.log(evenArr)
 
let array = [10, 20, 30, 40, 60, 120]

let evenArray = array.filter( (value) => {
    if(value % 3 ===0 && value % 5 == 0){
        return true
    }else{
        return false
    }
})
console.log(evenArray)
 
// WAP to find all odd numbers from the array

let oddArr = arr.filter(ele => ele % 2 !== 0)

console.log(oddArr)