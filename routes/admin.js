const express = require("express");
const router = express.Router();
const productController = require('../controllers/products');

router.get("/add-product", productController.getAddProduct);

router.post("/add-product", productController.postAddProduct);

router.get("/product", productController.getProducts);
router.get("/product/:productId", productController.getProductsDetails);
router.put("/product/:productId", productController.editProduct);
router.delete("/product/:productId", productController.deleteProduct);

module.exports = router;