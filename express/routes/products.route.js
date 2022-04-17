const productController = require('../controllers/product.controller');

const productRouter = require('express').Router();

productRouter.get("/", productController.getAllProducts); // products/
productRouter.get("/:id", productController.getOneProduct); // products/1
productRouter.post("/", productController.addProduct);
productRouter.get("/brand/:brand", productController.getProductBrand);
productRouter.put("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);

module.exports = productRouter;