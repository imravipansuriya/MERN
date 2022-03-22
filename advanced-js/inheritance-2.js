// All classes by default extends Object.

// Object.toString()

class Vehicle{
    constructor(name, model, wheels) {
        this.name = name;
        this.wheels = wheels;
        this.model = model;
    }

    getName() {
        return this.name;
    }

    getWheels() {
        return this.wheels;
    }

    getModel() {
        return this.model;
    }

    setName(name) {
        this.name = name;
    }

    setWheels(wheels) {
        this.wheels = wheels;
    }

    setModel(model) {
        this.model = model;
    }

    // method to be overridden
    toString() {
        return this.name + " " + this.model + " has " + this.wheels;
    }
}

const vehicle = new Vehicle('BMW', 'X5', 4);

console.log(vehicle.toString());
// console.log(JSON.stringify(vehicle));