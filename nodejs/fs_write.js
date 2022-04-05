const fs = require("fs");

console.log(fs)

// Async Write
// fs.writeFile("./data/hello_ne.txt", "Hello World sdfs sdfsdfsdf ", (err) => {
//     if (err) {
//         console.log("Some error occured");
//         console.log(err);
//     } else {
//         console.log("File written successfully");
//     }
// });

try {
    fs.writeFileSync("./data/hello_ne1.txt", "Hello World sdfs sdfsdfsdf");
    console.log("File written successfully");
} catch (err) {
    console.log("Some error occured", err.message);
}
