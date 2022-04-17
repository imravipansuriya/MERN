const mongoose = require("mongoose");



const productSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    sellingPrice: {
        type: Number,
    },
    brand: {
        type: String,  
    },
    category: {
        type: String,  
    },
});


const productModel = mongoose.model("products", productSchema); // collection

module.exports = productModel;