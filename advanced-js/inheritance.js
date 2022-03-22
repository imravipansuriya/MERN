/*
==================================
    javaScript Advanced class 5
==================================
*/
/*
Class Inheritance
-----------------

To create a class inheritance, use the extends keyword.


The super() method refers to the parent class. By calling the super() method in 
the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

*/

class Animal {

    constructor(name) {
        // console.log("Animal constructor called.");
        this.name = name;
        this.speed = 0;
    }

    speak() {
        console.log(this.name + " makes a noise.");
    }

    run(speed) {
        this.speed = speed;
        console.log(this.name + " runs with speed " + this.speed + ".");
    }

    stop() {
        this.speed = 0;
        console.log(this.name + " stands still.");
    }
}

class Dog extends Animal {

    constructor(name) {
        // console.log("Dog constructor called");
        super(name);
    }

    // method overriding
    speak() {
        console.log(this.name + " barks.");
    }
}


const dog1 = new Dog("Rex");
dog1.speak();

const animal1 = new Animal("Rex");
animal1.speak();

// console.log(dog1)

// dog1.run(50);

console.log(dog1)

dog1.stop();

// console.log(dog1)
// class A extends B --> all the properties and methods of B are inherited by A.
