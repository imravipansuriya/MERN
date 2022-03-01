// WAP to print numbers from num1 to num2. // if num2 < num1, then show error to user.
 /*
var num1 = 50;
var num2 = 90;

while(num1 <= num2){

    console.log(num1++)

    // while (num1 >= num2){
    //     console.log("error")
    // }

}*/

 

// var num1 = 15;
// var num2 = 50;

// var e = "error"

// while(num1 <= num2){

//     console.log(num1);
//     num1++;   
    
//     if(num2 <= num1){
//         console.log("error")
//     }
// }

 
 

// 2. WAP to print all numbers from num1 to num2 which are divisible by both 3 and 5.

 
// var demo1 = 10;
// var demo2 = 20;

// while (num1 % 3 === 0 && num1 % 5 === 0){
//     console.log(num1);

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

var Row = 6;
var Col = 2;

var i = 1;

while (i <= Row){

    var j = 1;
    while(j <= Col){

        console.log(i)
        j++
    }

    console.log("")
    i++
}

 