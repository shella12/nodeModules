const express = require("express");
const router = express.Router();
const productController = require('../controllers/products');

router.get("/add-product", productController.getAddProduct);

router.post("/add-product", productController.postAddProduct);

router.get("/product", productController.getProducts);
router.get("/product/:productId", productController.getProductsDetails);
router.get("/product/edit/:productId", productController.editProduct);
router.post("/product/edit/:productId", productController.updateProduct);
router.post("/product/delete", productController.deleteProduct);

module.exports = router;