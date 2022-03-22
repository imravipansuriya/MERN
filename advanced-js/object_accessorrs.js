/*
==================================
    javaScript Advanced class 2
==================================
*/

// Accessors: 
/**
 * Getters: used to get the value of an object's property.
 * Setters: used to set the value of an object's property.
 */
/*
const person = {
    name: 'John',
    getName: function() {
        return this.name;
    },
    setName: function(value) {
        this.name = value;
    },
    
    age: 30,
    getAge: function() {
        return this.age;
    },
    setAge: function(value) {
        this.age = value;
    }
}
*/
const personOne = {
    name: '',
    getName : function(){
        return this.name;
    },
    setName : function(value){
        this.name = value
    },

    age: 0,
    getAge: function(){
        return this.age;
    },
    setAge: function(value){
        this.age = value;
    },

    job: '',
    getJob: function(){
        return this.job;
    },
    setJob: function(value){
        this.job = value;
    }
}

personOne.setName("Vaghle")
console.log(personOne.name)


personOne.setJob("Designer")
// console.log(personOne.job)

personOne.getJob()

// const person1 = {
//     name: 'Johnasdasd',
//     getName: function() {
//         return this.name;
//     },
//     setName: function(value) {
//         this.name = value;
//     },
    
//     age: 350,
//     getAge: function() {
//         return this.age;
//     },
//     setAge: function(value) {
//         this.age = value;
//     }
// }


// // console.log(person.name)
// console.log(person.getName())

// person.setAge(40)
// console.log(person.getAge())