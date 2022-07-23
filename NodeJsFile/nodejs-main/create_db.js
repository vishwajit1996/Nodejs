/*const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='e-comm'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data)


}

getData();*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});