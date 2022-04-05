/*
// Syntax


while (condition) {
  // code block to be executed
}

// Example

  while (i < 10) {
  text += "The number is " + i;
  i++;
}

*/


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

 

// var a = 1;
// while (a <= 10){
//     console.log(a);
//     a++;
// }

 
// var b = 1;
// while(b <= 50){
//      console.log(b);
//      b++;
// }

// var c = 11;
// while(c <= 50){
//     console.log(c);
//     c++;
// }

// var d = 50;

// while(d <= 100){
//     console.log(d);
//     d++;
// }

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

// var number = 1;
// while(number <= 20){
//     // console.log(number)
//     if(number % 2 == 1){
//         console.log( number + " Even")
//     }else{
//         console.log(number + " Odd")
//     }
//     number++
// }


// even numbers


// var g = 0;

// while(g <= 50){

//     if(g % 2 === 0){
//         console.log(g) 
//     }
//     g++;
// }


 
// Method 2 

// even numbers

// var i = 0; // loop initializer

// while( i <= 20 )// loop condition
// { 
//     // loop body
//     console.log(i);
//     i += 2; // loop updation
// }

// var f = 0;

// while (f <= 50){
//     console.log(f);
//     f+= 2;
// }



// WAP to print all the digits of a number using while loop
// e.g. if input is 569, then output is 5 6 9

/*
var num = 123; // loop initializer

while(num > 0) { // loop condition
    console.log(num % 10); // 1 % 10 = 1
    num = parseInt(num / 10); // loop updation // 1 / 10 = 0.1 ==> 0
}
*/


// var count1 = 80;

// while(count1 > 0){
//     console.log(count1 % 10);
//     count1 = parseInt(count1 / 10);
// }


 
// WAP to print table of a number using while loop

 
// let num = 5;

// var i = 1;
// while (i <= 10) {
//     console.log(num + " * " + i + " = " + num * i);
//     i++;
// }
 
// var count = 8;
// var i = 1;

// while(i <= 10){
//     console.log(count + " * "  + i + " * " +  count * i);
//     i++;
// }

var g = 1;
var h = 7;

while(g <= 10){
    console.log(h + " * " + g + " = " + (g*h))
    g++
}