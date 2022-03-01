// WAP to print numbers from num1 to num2. // if num2 < num1, then show error to user.

var num1 = 100;
var num2 = 90;

if (num1 >= num2){
    console.log("error")
}

while(num1 <= num2){
    console.log(num1++)
}

 
 
 
 

// 2. WAP to print all numbers from num1 to num2 which are divisible by both 3 and 5.

 
// var demo1 = 10;
// var demo2 = 50;

// var i = demo1

// while (i <= demo2){
//     if (i % 3 ===0 && i % 5 ===0){
//         console.log(i)
//     }
//     i++;
// }



/* 3. WAP to print a pattern
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
*/


// var row = 2;
// var col = 2;

// var q = "";

// while(q <= row){

//     var m = 1;
//     var num = "1 2 3 4 5";

//     while(m <= col){
//         num = num + " ";
//         m++;
//     }
    
//     console.log(num)
//     q++;
// }

// var Row = 6;
// var Col = 2;

// var i = 1;

// while (i <= Row){

//     var j = 1;
//     while(j <= Col){

//         console.log(i)
//         j++
//     }

//     console.log("")
//     i++
// }

 

var row = 10;
var col = 5;

var q = 1;

while(q <= row){

    var m = 1;
    var star = "";

    while(m <= col){
        star = star + m + " "
        m++;
    }
    console.log(star)
    q++;
}


