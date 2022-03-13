// function: block of code that performs a set of operations.

/*
// function definition
function add() {
    console.log(10 + 20);
}

add(); // function call
*/

// function parameter: input for the functions

/**
    function function_name(parameter1, parameter2) {
        // code to be executed
    }
 */
/*
function add(a, b) {
    console.log(a + b);
}

// add(10, 30); // function call
// add(20, 30); // function call

let n1 = 10;
let n2 = 20;

// add(n1, n2); // function call ==> add(10, 20) ==> 
*/

/*
 // function calling another function
function add(a, b) {
    console.log(a + b);
}

function hello(a, b) {
    console.log("Hello " + a + " " + b);
    add(a, b);
}

hello(10, 20);
*/

// WAF to calculate the area of a rectangle, given the length and width and print its double
// area ==> length * width

/*
function area(length, width) {
    // console.log(length * width);
    return length * width;
}

let length = 10;
let width = 20;

let areaOfRect = area(length, width);
console.log(2 * areaOfRect)
*/

// WAF to calculate the area of a rectangle, given the length and width and write another function to print its double

function area(length, width) {
    // console.log(length * width);
    return length * width;
}

function double(num) {
    return num * 2;
}

let length = 10;
let width = 20;

let areaOfRect = area(length);
// let doubleArea = double(areaOfRect);

// let doubleArea = double(area(length, width));

console.log(areaOfRect);


// WAF to return grade of a Student.

function grade(marks) {
    if (marks > 90) {
        return "A";
    } else if (marks > 80) {
        return "B";
    } else if (marks > 70) {
        return "C";
    } else if (marks > 60) {
        return "D";
    } else if (marks > 50) {
        return "E";
    } else {
        return "F";
    }
}

let gradeLetterForStudent1 = grade(75);
let gradeLetterForStudent2 = grade(65);
console.log(gradeLetterForStudent1, gradeLetterForStudent2);