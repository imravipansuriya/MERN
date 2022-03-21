const personObj = {
    name: '',
    getName: function() {
        return this.name;
    },
    setName: function(value) {
        this.name = value;
    },
    
    age: 0,
    getAge: function() {
        return this.age;
    },
    setAge: function(value) {
        this.age = value;
    },

    job: "",
    getJob: function() {
        return this.job;
    },
    setJob: function(value) {
        this.job = value;
    },
}

// constructor function
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayHello = function() {
        console.log('Hello ' + this.name + "  " + this.age + "  " + this.job);
    }
}

// objects
const person1 = new Person('John', 30, 'teacher');
const person2 = new Person('Mary', 25, 'student');
const person3 = new Person('Mike', 20, 'developer');

console.log(typeof Person)

// person1.sayHello()
// person2.sayHello()
// person3.sayHello()