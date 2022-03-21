// variable scope: it defines the reach of a variable

/*
{
    var a = 1; // global scope;
    console.log(a);
}

console.log(a);
*/

/*

let a = 1; // let is used to declare variable, which can be changed.
a = 3;  
console.log(a);

const b = 2; // const is used to declare a constant variable, which cannot be changed

// b = 3; // this will throw an error
console.log(b);

*/

/*
{
    let a = 1; // let is a block scope variable
    console.log(a);
}

console.log(a);
*/

/*
Variable hoisting: applicable to var. It is a process of moving all the variable declarations to the top of the scope.

console.log(a);
var a = 1; // var a; a = 1;
*/

/*
var a;
console.log(a)
a = 1;
*/

/*
{
    var a = 10;
    console.log(a);
}

a = a + 5;
console.log(a);

var a = 25;
console.log(a)
*/

let a = 10;
console.log(a);

a = a + 5;
console.log(a);


// you can declare same variables with var, but not with let and const