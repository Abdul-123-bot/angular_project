const express = require('express')
const cors = require('cors');
require('./db/config');
const User = require('./db/UserSchema');
const app = express();

app.use(cors());
app.use(express.json());

app.get("/",async (req,res)=>{
    let user = await User.find();
    res.send(user)
})

app.post("/", async (req,res)=>{
    let js = {
        name:"abc",
        email:"abc@gmail.com",
        password:"sjdhbckjs",
        type:1
    }
    let user = new User(js);
    let r = await user.save();
    res.send(r)
})

app.put(`/:name`,async (req,res)=>{
    let name = req.params.name;
    let result = await User.updateOne({"name":name},{$set:{"email": "aksdjbvjka@gmail.com"}});
    res.send(result);    
})

app.delete(`/:name`,async (req,res)=>{
    let name = req.params.name;
    let result = await User.deleteOne({"name":name});
    res.send(result); 
})

app.listen(4000, ()=> console.log("hello world"));
