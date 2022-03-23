// callback: function that is passed as an argument to another function.

const square = (num) => num * num;

const demo = () =>{
    console.log("demo")
}

const demo2 = () =>{
    demo()
}

demo2()


// const hello = () => {
//     console.log("Hello");
// }

// hello()

// const world = () => {
//     console.log("World");
// }
// world()

// const fn = () => {
//     console.log("fn")
// }

// const main = (fn) => {
//     fn(); // function invocation or calling
// }

// main(world)
// main(hello);
// // square(5);

// // hello();
