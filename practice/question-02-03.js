// 1. WAP named "counting" to print numbers from num1 to num2, where start, and end are function;
// 2 get a number, if it is even print "Number is even", if not print "Nmber is odd", try with functions
// 3. WAP to check if a number is divisible by 9, (if number is divided by 9, then remained is 0, then thart number is divisible by 9)
// 4. WAP to check if a number is divisble by 3 and 5 both. (do it with nested if, also with single if)
// 5. WAP to print a pattern
//         1 2 3 4 5
//         1 2 3 4 5
//         1 2 3 4 5
//         1 2 3 4 5



// 1. WAP named "counting" to print numbers from num1 to num2, where start, and end are function;

function counting(num1, num2){
    while(num1 <= num2){
        console.log(num1++)
    }
}

counting(20, 30);


// 2 get a number, if it is even print "Number is even", if not print "Nmber is odd", try with functions

 

function number(count){
    if( count % 2 === 0){
        return "Number is Even";
    }
    else{
        return "Number is Odd";
    }
}

var count = number(2);

console.log(count)


// 3. WAP to check if a number is divisible by 9, (if number is divided by 9, then remained is 0, then thart number is divisible by 9)

function divisibility(value){

    if (value % 9 === 0 ){
        console.log("value1 is divided by 9")
    } else{
        console.log("value1 is not divided by 9")
    }
}

divisibility(18);

// 4. WAP to check if a number is divisble by 3 and 5 both. (do it with nested if, also with single if)

 
 

function divisble(num1){
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
    
}

 divisble(15)

// Single if

function parameter(demo){
    if (demo % 3 === 0 && demo % 5 === 0 ){
        console.log("demo is divisble by both");
    }
    else{
        console.log("error");
    }
}

 parameter(10)






// 5. WAP to print a pattern
//         1 2 3 4 5
//         1 2 3 4 5
//         1 2 3 4 5
//         1 2 3 4 5
 


function pattern(row, col){
    for(var q = 1; q <= row; q++){
        var star = "";
        for(var m = 1; m <= col; m++){
            star = star + m + " "
        }
        console.log(star)
    }
    
}

pattern(3, 3)

