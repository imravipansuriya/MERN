/*
    if( condition ) {
        // do something
    } else {
        // do something
    }

*/

// If the condition is true, the first block of code is executed, otherwise the second block of code is executed.

// WAP to check whether the given number is even or odd.
// odd: if divided by 2 has a remainder of 1, ex: 3, 5, 7, 9
// even: if divided by 2 has a remainder of 0, ex: 2, 4, 6, 8

var num = 6;
if ( num % 2 === 0 ) {
    console.log("Number is Even")
} else {
    console.log("number is odd");
}

var num = 9;

if ( num % 2 === 0){
    console.log("Number is Even")
} else{
    console.log("Number is Odd")
}

var count = 8;

if( count % 2 === 0){
    console.log("Number is Even")
}
else{
    console.log("Number is Odd")
}

var count1 = 9;

if (count1 % 2 === 0){
    console.log("Number is Even")
}else{
    console.log("Number id Odd")
}

var count2 = 8;

if (count2 % 2 === 0){
    console.log("Number is Even")
} else{
    console.log("Number is Odd")
}


// WAP to check whether the given number is positive or negative.
// positive: if the number is greater than 0
// negative: if the number is less than 0

var num = 0;
if ( num >= 0 ) {
    console.log("Number is positive");
} else {
    console.log("Number is negative");
}


var num6 = -1;

if (num6 > 0){
    console.log("positive")
} else {
    console.log("negative")
}

var num7 = 20;

if (num7 > 0){
    console.log("positive")
} else {
    console.log("negative")
}

var student = 80;

if(student >= 60){
    console.log("Pass")
}
else {
    console.log("Fail")
}

// WAP to find the largest of three numbers.
 
// Method 1
var num1 = 25;
var num2 = 20;
var num3 = 15;

if( num1 > num2 ) {
    if ( num1 > num3 ) {
        console.log("num1 is the largest number");
    }
}

if (num2 > num1) {
    if (num2 > num3) {
        console.log("num2 is the largest number");
    }
}

if (num3 > num1) {
    if (num3 > num2) {
        console.log("num3 is the largest number");
    }
}

var part1 = 30;
var part2 = 90;
var part3 = 80;

if (part1 > part2){
    if (part1 > part3){
        console.log("part1 is largest number")
    }
}

if (part2 > part1){
    if (part2 > part3){
        console.log("part2 is largest number")
    }
}

if (part3 > part1){
    if (part3 > part2){
        console.log("part3 is largest number")
    }
}

/*
// Method 2
var num1 = 25;
var num2 = 26;
var num3 = 35;

if( num1 > num2 && num1 > num3 ) {
    console.log("num1 is the largest number");
}

if (num2 > num1 && num2 > num3) {
    console.log("num2 is the largest number");
}

if (num3 > num1 && num3 > num2) {
    console.log("num3 is the largest number");
}
*/

var demo7 = 60;
var demo8 = 70;
var demo9 = 80;

if (demo7 > demo8 && demo7 > demo9){
    console.log("demo7 is the largest number");
}

if (demo8 > demo7 && demo8 > demo9){
    console.log("demo8 is the largest number")
}

if (demo9 > demo7 && demo9 > demo8){
    console.log("demo9 is the largest number")
}

// nested if

// Method 3

var num1 = 55;
var num2 = 80;
var num3 = 90;

if (num1 > num2) {
    if (num1 > num3) {
        console.log("num1 is the largest number");
    }
} else if (num2 > num3) {
    console.log("num2 is the largest number");
} else {
    console.log("num3 is the largest number");
}

var num4 = 85; 
var num5 = 70;
var num6 = 80;

if (num4 > num5){
    if (num4 > num6){
        console.log("Number4 is the largest number");
    }
} else if (num5 > num6){
    console.log("Number 5 is the largest number");
} else{
    console.log("number 6 is the largest number");
}

// WAP to get the percentage of marks scored by a student, and print its grade.
/*
    percentage > 90: A
    percentage > 80: B
    percentage > 70: C
    percentage > 60: D
    percentage > 50: E
    percentage <= 50: F
*/

// var percentage = 41;

// if (percentage > 90) {
//     console.log("A");
// } else if (percentage > 80) {
//     console.log("B")
// } else if (percentage > 70) {
//     console.log("C")
// } else if (percentage > 60) {
//     console.log("D")
// } else if (percentage > 50) {
//     console.log("E")
// } else {
//     console.log("F")
// }

// WAP to get user input and print the day of the week.
/*
    1: Monday
    2: Tuesday
    3: Wednesday
    4: Thursday
    5: Friday
    6: Saturday
    7: Sunday
*/
 
var day = 3;
if (day === 1) {
    console.log("Monday");
} else if (day == 2) {
    console.log("Tuesday");
} else if (day == 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
} else if (day === 6) {
    console.log("Saturday");
} else if (day === 7) {
    console.log("Sunday");
} else {
    console.log("You are a fool !")
}