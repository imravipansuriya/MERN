let products = []

const productController = {

    getAllProducts: (req, res) => {
        console.log("Requested products");
        res.send({
            message: "Products fetched successfully",
            data: products
        });
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

    addProduct: (req, res) => {
        console.log(req.body);
        let newProduct = req.body;
        newProduct.id = products.length + 1;
        products.push(newProduct);
        res.send({
            message: "Product added successfully"
        })
    }
}

module.exports = productController;