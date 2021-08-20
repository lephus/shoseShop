var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("shose_shop");
  var collectionList = ["customers", "categories", "products", "colors", "sizes", "trademarks", "orders", "cites", "districts", "streets"];
  collectionList.forEach(function(collectionName) {dbo.createCollection(collectionName); console.log(collectionName)})
});