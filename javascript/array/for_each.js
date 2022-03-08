// array.forEach(function(elements, index, arr))


let arr = [10, 20, 30, 40, 60, 80];

let array = [10, 20, 30, 40, 50, 60, 70, 80]



// WAP to print all elements of the array

const printFn = (ele, index) => {
    console.log(ele)
}

const printall = (a, b) =>{
    console.log(a, b)
}

array.forEach(printall)

// arr.forEach(printFn)
// function which do not have any name are called anonymous function

// arr.forEach((ele, index) => {
//     console.log(ele)
//     return ele * 2
// })

// arr.forEach((ele, index) => {
//     console.log(ele * 2)
// })


// WAP to print all elements of the array

// array.forEach((c, d) =>{
//     console.log(c)
// })



// WAP to print all elements of the array in reverse order
 
array.reverse().forEach((e) => {
    console.log(e)
})


// WAP to find the sum of all elements of the array

// let plush = 0;
// for(let c = 0;  c < array.length; c++){
//     plush = plush + array[c]
// }
// console.log(plush)

// let sumall = () => {
//     let plush = 0;
//     for(let c = 0;  c < array.length; c++){
//         console.log(plush = plush + array[c])
//     }
// }

// array.forEach(sumall)

// array.forEach((element) => {
//     console.log(element + element)
// });

