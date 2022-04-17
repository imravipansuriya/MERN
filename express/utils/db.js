const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/mydb';

const makeDatabaseConnection = () => {
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.log(err);
    })
}

module.exports = makeDatabaseConnection;