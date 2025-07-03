

// // mongodb+srv://ggvofficials:zKa7oNj9wUfXmmYs@namasteanshu.b0aild6.mongodb.net/

// require("mongodb")
    
// const URI = "mongodb+srv://ggvofficials:zKa7oNj9wUfXmmYs@namasteanshu.b0aild6.mongodb.net/"

// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = "mongodb+srv://ggvofficials:zKa7oNj9wUfXmmYs@namasteanshu.b0aild6.mongodb.net/";
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'Testing';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection("User");


//   const data = {
//     "Name" : "Ayush Gupta",
//     "City" : "Piri Bazar",
//     "Phone Number": "8434870303"
//   }

//   const insertResult = await collection.insertMany([data]);
// console.log('Inserted documents =>', insertResult);

// const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/hello', (req, res) => {
  res.send('INDIA')
})

app.get('/test', (req, res) => {
  res.send('CHINA')
})

app.delete('/delete', (req, res) => {
  res.send('Deleting china from map')
})

app.get('/user', (req, res) => {
  console.log({...req.query});
  res.send("Learning about query")
})

app.get('/user/:userid', (req, res) => {
  console.log({...req.params});
  res.send("Learning about query")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

