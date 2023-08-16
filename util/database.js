const mongoDB =  require('mongodb');
const mongoClient = mongoDB.MongoClient;

const mongoConnect = callback => {
    mongoClient.connect('mongodb+srv://ayeshaarshad4567:SzOKhzrw04iuDPV0@cluster0.mkljinr.mongodb.net/?retryWrites=true&w=majority')
    .then(client => {
        console.log(client);
        callback(client);
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = mongoConnect;