// 1. complete
// 2. failed
// 3. pending

// Promise: Promise defines the state of an asynchronous operation.
/**
 * A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 */

// network call: successful, failed, pending (not yet completed)

let num = 1;
const promise = new Promise((resolve, reject) => {
    // asynchronous operation
    setTimeout(() => {
        if (num === 1) {
            resolve("Hello My name is Promise");
        } else {
            reject(new Error("No ENT FIle FOund"));
        }
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    // asynchronous operation
    setTimeout(() => {
        if (num === 2) {
            resolve("Hello My name is Promise 2");
        } else {
            reject(new Error("No ENT FIle FOund from promise 2"));
        }
    }, 2000);
});

// callback hell (callback hell)
promise.then(data => {
    console.log("Value returned from Promise:", data);
    promise2.then(data => {
        console.log("Value returned from Promise 2:", data);
        promise2.then(data => {
            console.log("Value returned from Promise 2:", data);
        }).catch(err => {
            console.log("Error returned from Promise 2:", err);
        });
    }).catch(err => {
        console.log("Error returned from Promise 2:", err);
        promise2.then(data => {
            console.log("Value returned from Promise 2:", data);
        }).catch(err => {
            console.log("Error returned from Promise 2:", err);
        });
    });
}).catch(err => {
    console.log("Error returned from Promise:", err.message);
    promise2.then(data => {
        console.log("Value returned from Promise 2:", data);
    }).catch(err => {
        console.log("Error returned from Promise 2:", err);
    });
}).finally(() => {
    console.log("Finally block");
})

// console.log(promise)

// setTimeout(() => {
//     console.log({ promise })
// }, 4000);