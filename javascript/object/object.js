// object: is a collection of properties and methods


/*

Objects

var person = {
    firstName:"John",
    lastName:"Doe",
    age:20,
    nationality:"German"
};


*/



// student: name, age, class, address, rollno

let student1 = {
    name: "John",
    age: 20,
    class: "10th",
    rollno: 1
}

let student2 = {
    name: "Jane",
    age: 21,
    class: "11th",
    rollno: 2
}

let teacher = {
    name: "John",
    age: 20,
    class: "10th",
    mobile: "1234567890",
    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
}

// console.log(teacher.address.city)
console.log(teacher['address']['city'])
console.log(teacher['address']['country'])
console.log(student2.name)
console.log(teacher.address.state)

// get all the keys/properties and values of an object

// let props = Object.keys(student1)
// let values = Object.values(student1)
// console.log(values)

let demo1 = Object.keys(student1)
console.log(demo1)

let demo2 = Object.values(student1)
console.log(demo2)

// for in loop
for(let prop in student1) {
    console.log(student1[prop])
}

for(let demo3 in student2){
    console.log(student2[demo3])
}