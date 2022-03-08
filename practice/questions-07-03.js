// 1. Take an array of numbers and print all the numbers which are divisible by 3 and 5. using filter.


let array = [ 2, 3, 6, 9, 8, 12, 10, 15]

let evenArr = array.filter((ele) => {
    if (ele % 3 === 0 && ele % 5 === 0) {
        return ele
    }
}) 

console.log(evenArr)


// 2. Find sum of all the numbers in an array using for each

let array2 = [10, 20, 30, 40, 50, 60, 70, 80];

var num = 0;
array2.forEach( (element) => {
    num += element;
    // console.log(num)
})
console.log(num);

// 3. Find product of all the numbers in an array using for each

var array3 = [1, 2, 3, 4, 5];

var product = 1

array3.forEach( (c) =>{
    product = product * c;
})

console.log(product)