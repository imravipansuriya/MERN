// callback: function that is passed as an argument to another function.

const square = (num) => num * num;

const hello = () => {
    console.log("Hello");
}

const world = () => {
    console.log("World");
}

const main = (fn) => {
    fn(); // function invocation or calling
}

main(world)
// main(hello);
// square(5);

// hello();