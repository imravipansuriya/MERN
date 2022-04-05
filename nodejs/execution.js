// non-blocking operation
console.log("1")

// blocking operation: settimeout, network calls, file system calls, database calls
setTimeout(() => {    console.log("2")}, 2000);

setTimeout(
    () => { 
        console.log("3")
    }, 3000
)

// non-blocking operation
console.log("3")