const express = require("express");
const app = express();

app.use(express.json());
 

app.listen(3000, () => {
    console.log("Product server is running on port: 3000")
});

let products = [
    {
        title: "Jerseys ",
        description: "“Casual wear” is only one of the phrases used to describe the trend away from pin stripes and high heels.",
        price: 26,
        brand: "zara",
        category: "Casual Wear",
        id: 1
    },
        {
        title: "NEMEZIZ",
        description: "FLEXIBLE BOOTS FOR AGILITY ON FIRM GROUND",
        price: 89,
        brand: "adidas",
        category: "Sportswear",
        id: 2
    },
	    {
        title: "BOOTS",
        description: "FLEXIBLE BOOTS FOR AGILITY ON FIRM GROUND",
        price: 97,
        brand: "adidas",
        category: "Sportswear",
        id: 3
    },
	   {
        title: "NEMEZIZ",
        description: "FLEXIBLE BOOTS FOR AGILITY ON FIRM GROUND",
        price: 89,
        brand: "adidas",
        category: "Sportswear",
        id: 4
    },
        {
        title: "PUMA x Royal Challengers",
        description: "Orders once successfully placed cannot be cancelled/returned.",
        price: 97,
        brand: "puma",
        category: "T-Shirt",
        id: 5
    },
    {
        
        title: "Jerseys ",
        description: "“Casual wear” is only one of the phrases used to describe the trend away from pin stripes and high heels.",
        price: 26,
        brand: "zara",
        category: "Casual Wear",
        id: 6
    }
]


// add products *
app.post("/products", (req, res) =>{
   let newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct)
    res.send({
        message: "Product added successfully"
    })
})

// get products *

app.get("/products", (req, res) =>{
    console.log("Requuested Products");
    res.send({
        message: "Product",
        data: products
    })
})

// get product with id *
app.get("/products/:id([0-9])", (req, res)=>{
    console.log("Requested product by id");
    console.log(req.params.id);
    let id = req.params.id;
    let product = products.find(product => product.id == id);
    if(product){
        res.send({
            message: "Product fatched Successfully",
            data: product
        });
     } else {
            res.send({
                message: "Product not found"
            })
    }
});

// Get All the products with the brand name specified.
app.get("/products/:brand", (req, res)=>{
    console.log("Requested product by brand");
    console.log(req.params.brand);
    let brand = req.params.brand;
    let product = products.filter(product => product.brand == brand);
    if(product){
        res.send({
            message: "Product fatched Successfully " + req.params.brand,
            data: product
        });
     } else {
            res.send({
                message: "Product not found"
            })
    }
});

// Update Product
app.put("/products/:id", (req, res) => {
    console.log("Requested user by id");
    let id = req.params.id;
    let product = products.find(product => product.id == id);
    if (product) {
        product.price = req.body.price;
        res.send({
            message: "User updated successfully",
            data: product
        });
    } else {
        res.send({
            message: "User not found"
        });
    }
})



app.delete("/products/:id", (req, res) => {
    console.log("Requested user by id");
    let id = req.params.id;
    let product = products.find(product => product.id == id);
    if (product) {
        let index = products.indexOf(product);
        products.splice(index, 1);
        res.send({
            message: "User deleted successfully"
        });
    } else {
        res.send({
            message: "User not found"
        });
    }
})