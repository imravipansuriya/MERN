// Syntax
/**
     switch(condition) {
        case value1:
            // code block 1
            break;
        case value2:
            // code block 2
            break;
        ....
        default:
            // code block x
    }
 */


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

var day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("You are a fool !");
        break;
}

var sun = 1;
switch (sun){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("you are a full !!")
        break;
}

// switch case will result in fall through, if break is not present in the case block.

// using Switch case find whether the number is even or odd.

var num = 17;
switch (num % 2) {
    case 0:
        console.log("Even");
        break;
    case 1:
        console.log("Odd");
        break;
    default:
        console.log("You are a fool !");
        break;
}

var part1 = 13;
switch (part1 % 2){
    case 0:
        console.log("number is positive")
        break;
    case 1:
        console.log("numver is nagative")
        break;
    default:
        console.log("error")
        break;
}

