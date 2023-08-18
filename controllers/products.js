const Product = require('../models/products');

exports.getAddProduct = (req, res) => {
  res.render("add-product")
}

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imgURL = req.body.imgURL;
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
  
}

exports.deleteProduct = (req, res ) => {
  
}
