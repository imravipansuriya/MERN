const productModel = require("../schema/product.schema");

let products = [{
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

    addProduct: async (req, res) => {
        console.log(req.body);
        let newProduct = req.body;

        try {
            const val = await productModel.create({
                title: newProduct.title,
                description: newProduct.description,
                price: newProduct.price,
                brand: newProduct.brand,
                category: newProduct.category,
            })
            console.log(val)
            return res.status(200).send({
                message: "Product added successfully",
                data: val
            });
        } catch (err) {
            console.log(err)
            return res.status(400).send({
                message: "Product not added",
                error: err
            })
        }
    },

    updateProduct: async (req, res) => {
        console.log(req.body);
        let newProduct = req.body;

        try {
            const val = await productModel.findByIdAndUpdate(req.params.id, {
                $set: {
                    title: newProduct.title,
                    description: newProduct.description,
                    price: newProduct.price,
                    brand: newProduct.brand,
                    category: newProduct.category,
                }
            })
            return res.status(200).send({
                message: "Product update successfully",
                data: val
            });
        } catch (err) {
            console.log(err)
            return res.status(400).send({
                message: "Error in product update",
                error: err
            })
        }
    },


    getAllProducts: async (req, res) => {

        try {
            const products = await productModel.find({});
            return res.status(200).json({
                message: "Products",
                data: products
            })
        } catch (err) {
            console.log(err)
            return res.status(400).send({
                message: "Error in getting Products"
            })
        }
    },

    getOneProduct: async (req, res) => {

        try{
            const product = await productModel.findById(req.params.id);
            return res.status(200).json({message: "Product", data: product})
        } catch(err){
            console.log(err);
            return res.status(400).send({
                message: "Error in Geting Product"
            })
        }
    },

    getProductBrand: async (req, res) => {
        console.log(req.params.brand);
        let brand = req.params.brand;
        try {
            
            let product =  await products.filter(product => product.brand == brand);
        //    const product =  await productModel.filter(product => product.brand == brand); 
            return res.status(200).json({
                message: "Requested product by brand",
                data: product
            })
        } catch (err) {
                console.log(err)
                res.status(400).send({message: "Product brand not found"})
        }
        // let product = products.filter(product => product.brand == brand);
         
    },
   
    deleteProduct: async (req, res) => {
        try {
            await productModel.findByIdAndDelete(req.params.id);

            return res.status(200).json({message: "Product deleted successfully"});
        } catch (err) {
            console.log(err)
            return res.status(400).send({
                message: "Error in product Delete",
            })
        }
    },

}



module.exports = productController;