let arr = [10, 20, 30, 40, 60, 80];


// WAP to get double of all elements of the array using map
let doubleArr = arr.map((ele, index) => {
    return ele * 2
})

console.log(doubleArr)

let plush = 0;
let plushArray = arr.map((ele)=>{
     plush = plush + ele;
})
console.log(plush)


// WAP to get square of all elements of the array using map

// let newArr = arr.map((ele, index) => {
//     return ele * ele
// })

// console.log(newArr)
 
