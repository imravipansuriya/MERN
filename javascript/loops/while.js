// WAP print numbers from 1 to 10 using while loop

/*
var i = 1; // loop initializer

while( i <= 10 )// loop condition
{ 
    // loop body
    console.log(i);
    i++; // loop updation
}
*/

// WAP to print even numbers from 1 to 20 using while loop

/*
Method 1
var i = 1; // loop initializer

while( i <= 20 )// loop condition
{ 
    // loop body
    if (i % 2 === 0) {
        console.log(i);
    }
    i++; // loop updation
}
*/

/*
Method 2

var i = 0; // loop initializer

while( i <= 20 )// loop condition
{ 
    // loop body
    console.log(i);
    i += 2; // loop updation
}
*/

// WAP to print all the digits of a number using while loop
// e.g. if input is 569, then output is 5 6 9

/*
var num = 123; // loop initializer

while(num > 0) { // loop condition
    console.log(num % 10); // 1 % 10 = 1
    num = parseInt(num / 10); // loop updation // 1 / 10 = 0.1 ==> 0
}
*/


// WAP to print table of a number using while loop

/*
let num = 5;

var i = 1;
while (i <= 10) {
    console.log(num + " * " + i + " = " + num * i);
    i++;
}
*/