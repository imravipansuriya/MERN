// spread: spread the content of the array or object (...)

let teacher = {
    name: "John",
    age: 20,
    classes: "10th",
    mobile: "1234567890",
    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
}

let student = {
    stud_name: "John",
    stud_age: 20,
    stud_class: "10th",
    age: 25,
}

// let arr1 = [10, 20, 30, 40, 50]
// let arr2 = [60, 70, 80, 90, 100]

// let arr = [...arr1, ...arr2]
// console.log(arr)

// let combinedArr = { ...teacher, ...student }
// console.log(combinedArr)

// console.log(teacher)

let bothArray = {...teacher, ...student}
console.log(bothArray)
    