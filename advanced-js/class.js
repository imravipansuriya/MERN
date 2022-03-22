
/*
==================================
    javaScript Advanced class 4
==================================
*/

/*
> class
  Use the keyword class to create a class.
  Always add a method named constructor():



> Syntax
-----------

class ClassName {
    constructor() { ... }
}

> Syntax
-----------

class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}


 */



class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    sayHello() {
        console.log('Hello ' + this.name + "  " + this.age + "  " + this.job);
    }
}

/*
const person1 = new Person('John', 30, 'teacher');
const person2 = new Person('Mary', 25, 'student');
const person3 = new Person('Mike', 20, 'developer');

// console.log(typeof person1)
person1.sayHello()
person2.sayHello()
person3.sayHello()
*/

const persons = [];
persons.push(new Person('John', 30, 'teacher'));
persons.push(new Person('Mary', 25, 'student'));
persons.push(new Person('Mike', 20, 'developer'));

// console.log(persons);

persons.forEach(person => {
    person.sayHello();
})



