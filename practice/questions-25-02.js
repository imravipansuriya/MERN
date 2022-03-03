// 1. get a number, if it is even print "Number is even", if not print "Nmber is odd", try with if-else, ternary, switch case

// WAP to check whether the given number is even or odd.
// odd: if divided by 2 has a remainder of 1, ex: 3, 5, 7, 9
// even: if divided by 2 has a remainder of 0, ex: 2, 4, 6, 8


// with if-else

// var count = 8;

// if( count % 3 === 0){
//     console.log("Number is Even")
// }
// else{
//     console.log("Number is Odd")
// }

// ternary

// var num = 2;

// num % 2 === 0 ? console.log("Number is Even") : console.log("Number is Odd")


// With switch

// var count = 2;

// switch (count % 2){
//     case 0:
//         console.log("Number is Even")
//     break;
//     case 1:
//         console.log("Number is Odd")
//     break;
//     default:
//         console.log("Error")
//     break;
// }


// WAP to check if a number is divisible by 9, (if number is divided by 9, then remained is 0, then thart number is divisible by 9)


// var value1 = 18;

// if (value1 % 9 === 0 ){
//     console.log("value1 is divided by 9")
// } else{
//     console.log("value1 is not divided by 9")
// }


// 3. WAP to check if a number is divisble by 3 and 5 both. (do it with nested if, also with single if)


// nested if
var num1 = 15;

if (num1 % 3 === 0){
    if(num1 % 5 === 0){
        console.log("num1 is divisble by 3 and 5 both");
    }else{
        console.log("num1 is not divisble by 3 and 5");
    }
} 
else{
    console.log("error");
}


// Single if

var demo = 15;

if (demo % 3 === 0 && demo % 5 === 0 ){
    console.log("demo is divisble by both");
}
else{
    console.log("error");
}


