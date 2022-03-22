

// setTimeout(function, time to wait in milliseconds);
// blocking statement
setTimeout(() => { 
    console.log(1);
}, 5000);


console.log("Hey")
setTimeout (()=>{
    console.log("Hii")
}, 2000)

// blocking statement
setTimeout(() => { 
    console.log(2);
}, 2500);


// non-blocking statement
console.log(0);
// non-blocking statement
console.log(5);

// blocking statement
setTimeout(() => { 
    console.log(4);
}, 2500);

// setInterval(() => {
//     console.log("Hello World Again!");
// }, 3000)