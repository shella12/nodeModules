const mongoDB =  require('mongodb');
const mongoClient = mongoDB.MongoClient;

let _db;

const mongoConnect = callback => {
    mongoClient.connect('mongodb+srv://ayeshaarshad4567:SzOKhzrw04iuDPV0@cluster0.mkljinr.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
        console.log("connected!")
        _db = client.db();
        callback(client);
    })
    .catch(err => {
        console.log(err)
    })
}

const getDB = () => {
    if(_db) {
        return _db
    }
    throw 'No database found'
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;