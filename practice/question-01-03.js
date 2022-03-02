// 1. WAP to print numbers from num1 to num2. // if num2 < num1, then show error to user.

// 2. WAP to print all numbers from num1 to num2 which are divisible by both 3 and 5.

// 3. WAP to print a pattern
//         1 2 3 4 5
//         1 2 3 4 5
//         1 2 3 4 5
//         1 2 3 4 5

// ====================================================================

// 1. WAP to print numbers from num1 to num2. // if num2 < num1, then show error to user.


// var demo1 = 5;

// for (var demo2 = 10; demo1 <= demo2; demo1++) {

//     if(demo2 < demo1){
//         console.log("error")
//     }
//     console.log(demo1)
// }

// ====================================================================

// 2. WAP to print all numbers from num1 to num2 which are divisible by both 3 and 5.


// var demo3 = 10;
// var demo4 = 50;

// for (var i = demo3; i <= demo4; demo3++){

//       if(i % 3 === 0 && i % 5 === 0){
//         console.log(i)
//       }
//       i++
// }



// var demo4 = 90;

// for (var demo3 = 3; demo3 <= demo4; demo3++){

//       if(demo3 % 3 === 0 && demo3 % 5 === 0){
//         console.log(demo3)
//       }
//       demo3++
// }


// ====================================================================


// 3. WAP to print a pattern
//         1 2 3 4 5
//         1 2 3 4 5
//         1 2 3 4 5
//         1 2 3 4 5


var row = 3;
var col = 10;


for(var q = 1; q <= row; q++){
    var star = "";
    for(var m = 1; m <= col; m++){
        star = star + m + " "
    }
    console.log(star)
}



 