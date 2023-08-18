const mongoDB = require('mongodb');
const getDB = require('../util/database').getDB;

class Product {
    constructor(title, price, description, imageURL){
      this.title = title;
      this.price = price;
      this.description = description;
      this.imageURL = imageURL;
    }
    save() {
      const db = getDB();
      return db.collection('products').insertOne(this);
    }
    static fetchAll() {
      const db = getDB();
      return db.collection('products').find().toArray()
      .then(products => {
        console.log(products)
        return(products);
      })
      .catch(err => {
        console.log(err)
      })

    }
    static findbyId(prodId) {
      console.log(prodId, "product id is being fetched")
      const db= getDB();
      return db.collection('products').find({_id: new mongoDB.ObjectId(prodId)}).next()
      .then(product => {
        console.log(product)
        return(product);
      })
      .catch(err => {
        console.log(err)
      })
    }
}

module.exports = Product