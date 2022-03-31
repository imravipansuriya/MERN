const fs = require("fs") // file system module

// console.log("Started Reading File")

// Asynchronous read
// fs.readFile("./data/hell.txt", (err, data) => {
//     if (err) {
// Error handled
//         console.log("Some error occured");
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// })


// Synchronous read

// Error handling
// try {
//     const data = fs.readFileSync("./data/hell.txt");
//     console.log(data.toString());
// } catch (p) {
//     console.log("Some error occured", p.message);
//     console.log();
// } finally { // finally block is always executed, optional
//     console.log("Finally block");
// }


console.log("Finished Reading File")