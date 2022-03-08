// object: is a collection of properties and methods

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

let employee =  {
    name: "Mohan",
    experian:  5,
    tech: "reactJs",
    salary: 2000,
}

// console.log(teacher.address.city)
console.log(teacher['address']['city'])

// get all the keys/properties and values of an object

// let props = Object.keys(student1)
// let values = Object.values(student1)
// console.log(values)

// let keys = Object.keys(employee);
// console.log(keys)

// let values = Object.values(employee);
// console.log(values)

// for in loop
// for(let prop in student1) {
//     console.log(student1[prop])
// }

for(let values in employee){
    console.log(employee[values])
}

console.log()