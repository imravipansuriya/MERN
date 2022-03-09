const cars = [
    {
        make: 'bmw',
        model: 'm4',
        year: 2014,
        color: 'blue',
        price: 10000
    },
    {
        make: 'bmw',
        model: 'm5',
        year: 2015,
        color: 'red',
        price: 15000
    },
    {
        make: 'bmw',
        model: 'm1',
        year: 2011,
        color: 'red',
        price: 1000
    },
    {
        make: 'bmw',
        model: 'm3',
        year: 2013,
        color: 'black',
        price: 5000
    },
    {
        make: 'bmw',
        model: 'm2',
        year: 2012,
        color: 'white',
        price: 2000
    }
]

// Find all card with color red
// const redCars = cars.filter(car => car.color === 'red')
// console.log(redCars)


// Find the price of all red cars.
// const redCars = cars.filter(car => car.color === 'red')
// const redCarPrices = cars.filter(car => car.color === 'red').map(car => car.price)

// console.log(redCarPrices)

// sort the cars by year
// callback in sort(), takes 2 parameters, a and b => 
// if returning +ve value, a comes before b, decreasing order, second - first
// if returning -ve value, a comes after b, increasing order, first - second
// uses merge sort
// const sortedCarsByYear = cars.sort((car1, car2) => {
//     return car2.year - car1.year
// });

// console.log(sortedCarsByYear)

// Sort the cars by price, in increasing order

// const carsByPrice = cars.sort((car1, car2) => car1.price - car2.price)
// console.log(carsByPrice)

// give the car models in increasing order of their prices.

// const carsByPrice = cars.sort((car1, car2) => car1.price - car2.price).map(car => car.model)
// console.log(carsByPrice)