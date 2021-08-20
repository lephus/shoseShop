var MongoClient = require('mongodb').MongoClient;
var http = require('http');
const options = {
    host: '117.3.81.221',
    port: 5000,
    path: '/city'
}
var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        data = JSON.parse(data);
        console.log(data)
        let arrayCity = []
        data.forEach(element => {
            console.log(element.district)
            var obj = {
                district : element.district,
                id : element.id,
                type : element.type
            }
            arrayCity.push(obj);
        });
        
        var url = "mongodb://localhost:27017/";
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("shose_shop");
        //   var myquery = { id: {$lt: 999} };
        //   dbo.collection("cites").deleteMany(myquery, function(err, obj) {
        //     if (err) throw err;
        //     console.log("document inserted");
        //     db.close();
        //   });
          dbo.collection("cites").insertMany(arrayCity, function(err, res) {
            if (err) throw err;
            console.log("document inserted");
            db.close();
          });
        });
    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();