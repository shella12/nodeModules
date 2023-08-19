const Product = require('../models/products');

exports.getProducts = (req, res ) => {
    Product.fetchAll().then(result => {
      res.render("shop", {products : result});
    })
    .catch(err => {
      console.log(err)
    })
  }