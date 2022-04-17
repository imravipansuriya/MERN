const productModel = require("../schema/product.schema");

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


const productController = {

    addProduct: (req, res) => {
        console.log(req.body);
        let newProduct = req.body;
        newProduct.id = products.length + 1;
        products.push(newProduct);
        res.send({
            message: "Product added successfully"
        })
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.find({});
            return res.status(200).json({ message: "Users", data: users });
        } catch (err) {
            console.log(err);
            return res.status(400).send({
                message: "Error in getting users"
            })
        }
    },

    getAllProducts: async (req, res) => {

        try{
            const products = await productModel.find({});
            return res.status(200).json({message: "Products", data: products})
        } catch (err){
            console.log(err)
            return res.status(400).send({
                message: "Error in getting Products"
            })
        }

        // console.log("Requested products");
        // res.send({
        //     message: "Products fetched successfully",
        //     data: products
        // });
    },

    getOneProduct: (req, res) => {
        console.log("Requested product by id");
        let id = req.params.id;
        let product = products.find(product => product.id == id);
        if (product) {
            res.send({
                message: "Product fetched successfully",
                data: product
            });
        } else {
            res.send({
                message: "Product not found"
            });
        }
    },

    getProductBrand: (req, res) => {
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
    },
    updateProductPrice: (req, res) => {
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
    },
    deleteProduct: (req, res) => {
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
    }
}

module.exports = productController;


