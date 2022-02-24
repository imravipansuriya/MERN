// Comparison Operators: Which are used to compare two values.
// used to compare values between two variables.
// They give values in Boolean, true or false.

var num1 = 5; // number
var num2 = 2;
var num3 = 7;
var num4 = 5;
var num5 = "5"; // string


var demo1 = 10;
var demo2 = 20;
var demo3 = 30;
var demo4 = 40;
var demo5 = 50;
var demo6 = 60;
var Demo1 = 10;
var Demo2 = 20;
var Demo3 = "30"
// >

// console.log(num1 > num2); // true
// console.log(num1 > num3); // false

// console.log(demo1 > demo2)
// console.log(demo5 > demo2)
// console.log(demo4 > demo5)
// console.log(demo1 > demo6)

// <

// console.log(num1 < num2); // false
// console.log(num1 < num3); // true
// console.log(demo2 < demo1)
// console.log(demo6 < demo4)
// console.log(demo5 < demo6)
// console.log(demo3 < demo5)

// >=
// console.log(num1 >= num2); // return true, if num1 is either greater or equal to num2
// console.log(num1 >= num3); // return false, if num1 is not greater or equal to num3
// console.log(num1 >= num4) // return true, if num1 is greater or equal to num4

// console.log(demo2 >= demo1)
// console.log(demo1 >= demo1)
// console.log(demo6 >= demo1)
// console.log(demo1 >= demo3)
// console.log(demo4 >= demo5)

// <=
// console.log(num1 <= num2); // return false, if num1 is not less or equal to num2
// console.log(num1 <= num3); // return true, if num1 is less or equal to num3
// console.log(num1 <= num4) // return true, if num1 is less or equal to num4

// console.log(demo1 <= demo2)
// console.log(demo5 <= demo2)
// console.log(demo4 <= demo6)

// == // only checks the value of variables, not the type of variables
// console.log(num1 == num2); // return false, if num1 is not equal to num2
// console.log(num1 == num3); // return false, if num1 is not equal to num3
// console.log(num1 == num4) // return true, if num1 is equal to num4
// console.log(num1 == num5) // return true

// console.log(demo1 == demo2)
// console.log(demo1 == Demo1)
// console.log(demo3 == demo2)
// console.log(demo2 == Demo2)
// console.log(demo3 == Demo3)    demo3 = 30, Demo3 = "30"


// --------------------
//Note:  console.log(num1 = num2) // return 2, because it assigns value of num2 into variable num1
    // console.log(demo1 = demo2)
// --------------------

// != 
// console.log(num1 != num2); // return true, if num1 is not equal to num2
// console.log(num1 != num3); // return true, if num1 is not equal to num3
// console.log(num1 != num4) // return false, if num1 is equal to num4

// console.log(demo1 != demo2)
// console.log(demo1 != Demo1)
// console.log(demo4 != demo6)

// ===: checks the value and type of variables
// console.log(num1 === num2); // return false, if num1 is not equal to num2
// console.log(num1 === num3); // return false, if num1 is not equal to num3
// console.log(num1 === num4) // return true, if num1 is equal to num4
// console.log(num1 === num5) // return false

// console.log(demo3 === Demo3)
// console.log(demo1 === demo2)
// console.log(demo1 === Demo1)
// console.log(demo2 === Demo2)