const Product = require('../models/products');

exports.getAddProduct = (req, res) => {
  res.render("add-product")
}

exports.postAddProduct = (req, res) => {
  title = req.body.title;
  price = req.body.price;
  description = req.body.description;
  imgURL = req.body.imgURL;
  const product = new Product(title, price, description, imgURL);
  product.save()
  .then(result => {
    console.log(result);
    res.redirect('/product');
  })
  .catch(err => {
    console.log(err)
  })
};

exports.getProducts = (req, res ) => {
  res.redirect('/');
}
