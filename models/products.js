const mongoDB = require('mongodb');
const getDB = require('../util/database').getDB;

class Product {
    constructor(title, price, description, imageURL, id = null){
      this.title = title;
      this.price = price;
      this.description = description;
      this.imageURL = imageURL;
      this._id = (id);
    }
    save() {
      const db = getDB();
      if(this._id){
        this._id = new mongoDB.ObjectId(this._id);
        return db.collection('products').updateOne({_id : (this._id)}, {$set : this});
      }
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

    static deleteProduct(prodId) {
      const db = getDB();
      return db.collection("products").deleteOne({_id: new mongoDB.ObjectId(prodId)})
      .then((result)=> {
        console.log("Deleted product");
      })
      .catch(err => {
        console.log(err);
      })
    }
}

module.exports = Product