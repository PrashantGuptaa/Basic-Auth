const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost/Authentication", { useNewUrlParser: true })
  .then(() =>
    console.log("________________Connected to MongoDB____________________")
  )
  .catch((err) => console.log("Some error Occured", err));

const AuthSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const AuthDetail = mongoose.model("authDetail", AuthSchema);


app.post("/signup", (req, res) => {
  console.log("BODY", req.body);
  let { name, password } = req.body;
  console.log("NAME", name);
  if (!name || !password || name.length <= 5 || password.length <= 5) {
    res.send({ res: "Rejected" });
    return;
  }
AuthDetail.findOne({name: name}).then((user)=> {
    
    
      console.log("In Existed", user.name);
      res.send({res : "Already Existed"})
      res.end();
    
  }).catch((err) => {  const authData = new AuthDetail({ name, password });
  authData.save().then(() => res.send({ res: "Allowed" }));});
  
});


app.post("/login", (req, res) => {
    let { name, password } = req.body;
    if (!name || !password ) {
        res.send({ res: "Rejected" });
    }
    AuthDetail.findOne({name}).then((user) => {
        if(user.password === password){
        res.send({ res: "Allowed" });
    }else {
        res.send({ res: "Rejected" });
    }
    })
   
  }); 

  app.listen(4000, () => {console.log("Connected to Port 4000")});