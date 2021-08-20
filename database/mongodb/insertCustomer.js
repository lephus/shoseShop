var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var md5 = require('md5');
var random_name = require('node-random-name');
MongoClient.connect(url, async (err, db)=> {
  if (err) throw err;
    _password = md5("123456")
  let myobj = []
  for(var i = 0; i< 50; i++){
    const _name = String(random_name());
    const _s1 = String(random_name());
    const _s2 = String(random_name());
    const _email = _name.replace(" ", "")+"@gmail.com"
    const _address = String(Math.floor(Math.random() * 1000) + 1) +" "+ _s1 + " - "+ _s2;
    


    var newObj = {
        id: i+1,
        image: "https://media.vov.vn/uploaded/usobwtngx2k/2020_01_01/1_ljtd.jpg",
        fullName: _name, 
        address: _address , 
        age: Math.floor(Math.random() * 20) + 17,
        email: _email,
        password: _password
    };
    myobj.push(newObj);
  }
  var dbo = db.db("shose_shop");
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("document inserted");
    db.close();
  });
});