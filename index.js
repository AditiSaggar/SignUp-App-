const express =require('express');
const mongoose = require("mongoose");
const userRouter =require ('./src/Routes/index')

const app = express();
app.use(express.json());
app.use("/api/v1", userRouter)
app.listen(3000,()=>{
    console.log("Server is working on http:localhost:3000");
})

mongoose.connect("mongodb://127.0.0.1:27017/Signup").then((value)=>{
    console.log("Connected with Mongodb");
}).catch((error)=>{
    console.log("Not Connected");
})


// app.get('/', function(req, res){
//     res.send('Hello World')
// }) 
