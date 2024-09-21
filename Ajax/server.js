
const exp = require("constants");
const express=require("express");
const app=express();


app.use(express.static("."));
app.use(express.json());

app.post("/login",(req,res)=>{
   console.log(req.body);
   res.json({});
})

app.listen(3000,()=>{
    console.log("connected at port number number 3000");
})