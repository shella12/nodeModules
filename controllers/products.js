const Product = require('../models/products');
const mongoDB = require('mongodb');

exports.getAddProduct = (req, res) => {
  res.render("add-product")
}

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imgURL = req.body.imgURL;
  console.log(req.body)
  const product = new Product(title, price, description, imgURL);
  product.save()
  .then(() => {
    res.redirect('/product');
  })
  .catch(err => {
    console.log(err)
  })
};

exports.getProducts = (req, res ) => {
  res.redirect('/');
}

exports.getProductsDetails = (req, res ) => {
  Product.findbyId(req.params.productId)
  .then(product => {
    res.render("product-details",
    {product : product})
  })
  .catch(err => {
    console.log(err);
  })
}

exports.editProduct = (req, res ) => {
  const product = Product.findbyId(req.params.productId)
  .then(product => {
    res.render("edit-product", {product: product});
  })
 
}

exports.updateProduct = (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imgURL = req.body.imgURL;
  const _id = req.body.productId;
  console.log(title);
  const product = new Product(title, price, description, imgURL, _id);
  product.save()
  .then(() => {
    console.log("Updated product")
    res.redirect("/");
  })
}

exports.deleteProduct = (req, res ) => {
  Product.deleteProduct(req.body.productId)
  .then(() => {
   res.redirect("/")
  })
  .catch(err => {
    console.log(err)
  })
}
