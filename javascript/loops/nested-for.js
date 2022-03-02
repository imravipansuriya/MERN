// WAP to print numbers pattern
/*  
            * * * * *
            * * * * *
            * * * * *
*/



/*
var numOfRows = 5;
var numOfCols = 10;

for (var i = 1 ; i <= numOfRows ; i++) { // for rows
    var stars = "";

    for (var j = 1 ; j <= numOfCols ; j++) { // for columns
        stars = stars + "* "
    }

    console.log(stars);
}
*/


var row = 5;
var col = 3;



for (var i = 1; i <= row; i++){

    var star = ""

    for (var j = 1; j <= col; j++){
        star = star +  "* "
    }
     console.log(star)
}

 
// WAP to print tables from 1 to 5 using for loop loop

// for (var j = 1 ; j <= 5 ; j++) {
    
//     for( i = 1 ; i <= 10 ; i++ ) {
//         console.log(j + " * " + i + " = " + j * i);
//     }
//     console.log()

// }
 

for (var i = 1; i <= 5; i++){
    
    for(var j = 1; j <= 10; j++){
            console.log(i + " * " + j + " * " + j * i)
    }
    console.log()
}