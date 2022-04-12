const productController = require('../controllers/product.controller');

const productRouter = require('express').Router();

productRouter.get("/", productController.getAllProducts); // products/
productRouter.get("/:id", productController.getOneProduct); // products/1
productRouter.post("/", productController.addProduct);

module.exports = productRouter;