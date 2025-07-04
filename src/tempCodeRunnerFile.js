app.post("/signup",async(req,res)=>{
    const User = new UserModel({
      firstName : "Anshu",
      lastName : "Gupta",
      emailId : "anshu8111121@gmail.com",
      password: "anshu@123",
    });

    await User.save();
    res.send("user added succesfully");
});



  
mongodb().then(()=>{
    console.log("Database connection estb");

    app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

}).catch((err) => {
  console.log("err")
});

