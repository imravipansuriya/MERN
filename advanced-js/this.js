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