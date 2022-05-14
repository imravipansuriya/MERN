// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

/*
==================================
    javaScript Advanced class 1
==================================
*/



const person = {
    name: 'John',
    age: 30,
    job: 'teacher',
    address: {
        city: 'New York',
        state: 'NY'
    },
    sayHello: function() {
        console.log('Hello ' + this.name + "  " + this.age + "  " + this.address.city);
        // console.log(JSON.stringify(this.address) + "")
    }
}

person.sayHello()
// console.log(person.sayHello());




const person1 = {
    name: 'John',
    age: 30,
    job: 'teacher',
    address: {
        city: 'New York',
        state: 'NY'
    },

    sayhey: function(){
        console.log("Hey" + " " + this.name + " " + this.age + " " + this.address.city)
    }
}

person1.sayhey()



const person2 = {
    name: 'John',
    age: 30,
    job: 'teacher',
    address: {
        city: 'New York',
        state: 'NY'
    },

    personArr: function(){
        console.log("Your Citey is " + this.address.city)
    }
}

person2.personArr()





