const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String, // Ravi@1123
    },
    address: {
        type: {
            house_no: String,
            city: String,
            state: String,
            country: String,
        },
    },
    orders: {
        type: [
            {
                name: String,
                price: Number,
            },
        ],
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
    create_date: {
        type: Date,
    }
});

const userModel = mongoose.model("users", userSchema); // collection



module.exports = userModel;

// db.users.findOne()