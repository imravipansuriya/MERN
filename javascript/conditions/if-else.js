/*
    if( condition ) {
        // do something
    } else {
        // do something
    }
*/

// If the condition is true, the first block of code is executed, otherwise the second block of code is executed.

/*
// WAP to check whether the given number is even or odd.
// odd: if divided by 2 has a remainder of 1, ex: 3, 5, 7, 9
// even: if divided by 2 has a remainder of 0, ex: 2, 4, 6, 8

var num = 6;
if ( num % 2 === 0 ) {
    console.log("Number is Even")
} else {
    console.log("number is odd");
}
*/

/*
// WAP to check whether the given number is positive or negative.
// positive: if the number is greater than 0
// negative: if the number is less than 0

var num = 0;
if ( num >= 0 ) {
    console.log("Number is positive");
} else {
    console.log("Number is negative");
}
*/

// WAP to find the largest of three numbers.

/*
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
*/

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

/*
// Method 3
var num1 = 55;
var num2 = 46;
var num3 = 35;

if (num1 > num2) {
    if (num1 > num3) {
        console.log("num1 is the largest number");
    }
} else if (num2 > num3) {
    console.log("num2 is the largest number");
} else {
    console.log("num3 is the largest number");
}
*/


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
/*
var day = 14;
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
*/
