const express=require("express");
const route=express.Router();
const path=require("path");

route.get("/dashboard",(req,res)=>{
        res.sendFile(path.join(__dirname,"public","dashboard.html"));
})
route.get("/login",(req,res)=>{
        res.redirect("/dasboard");
})
route.get("/logout.html",(req,res)=>{
    req.session.destroy();
})


module.exports=route;