
// =======================================================
                    // Math library
// =======================================================

// ===========
// pi
// ===========

// const pi = 3.14;
const pi = Math.PI;
// console.log(pi)

// ===========
// Round off
// ===========

// 3.6 => 4
// 3.5 => 3
// 3.4 => 3
// 3.7 => 4

// let num = Math.round(3.4);
// console.log(num)

let demo1 = Math.round(98.2)
console.log(demo1)

let demo2 = Math.round(5.5);
console.log(demo2)

// =================================
// power ==> 2 ^ 5 ==> 2 * 2 * 2 * 2 * 2
// =================================

// let num = Math.pow(2, 5); // 2 ^ 5
// console.log(num)

let demo3 = Math.pow(9, 2);
console.log(demo3)

// =================================
// Square root
// =================================

// let num = Math.sqrt(25); 
// console.log(num)


let demo4 = Math.sqrt(81);
console.log(demo4)

// =================================
// Absolute value ==> -5 => 5 
// =================================

// let num = Math.abs(-5.456);
// console.log(num)


let demo5 = Math.abs(-65); // 65
console.log(demo5)

let demo6 = Math.abs(35); // 35
console.log(demo6)

// =================================
// cieling ==> round up ==> gives the next highest integer
// =================================

// let num = Math.ceil(4.9999);
// console.log(num)

let demo7 = Math.ceil(16.1);
console.log(demo7);

// =================================
// floor ==> round down ==> gives the next lowest integer
// =================================

// let num = Math.floor(5.05);
// console.log(num)

let demo8 = Math.floor(16.6);
console.log(demo8)


// =================================
// random number between 0 and 1
// =================================

let demo9 = Math.random();
console.log(demo9)


            // =================================
            // random number between 1 and 6
            // =================================

            // let num = Math.floor(Math.random() * 10) % 6 + 1;
            // console.log(num)

            let demo10 = Math.floor(Math.random() * 10 % 6 + 1);
            console.log(demo10)

// =================================
// Min and Max // can have multiple arguments
// =================================

// let num = Math.min(10, 20, 5, 40, 50);
// console.log(num)

let demo11 = Math.min(10, 20, 30, 40, 50, 60, 70)
console.log(demo11)

let demo12 = Math.max(10, 20, 30, 40, 50, 60, 70);
console.log(demo12)

// let num = Math.max(10, 20, 85, 40, 50, 45, 99, 105, 41);
// console.log(num)



var x = 10;
console.log(x += 5)

var x = "hi", y = 21;

console.log(x, y)