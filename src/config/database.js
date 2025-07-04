// getting-started.js
const mongoose = require('mongoose');



const mongodb = async ()=>{
  await mongoose.connect('mongodb+srv://ggvofficials:zKa7oNj9wUfXmmYs@namasteanshu.b0aild6.mongodb.net/devTinder');
                        //   mongodb+srv://ggvofficials:<db_password>@namasteanshu.b0aild6.mongodb.net/
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = mongodb;