const express=require("express");
const router=express.Router();
const path=require("path");



 router.get("/logout",(req,res)=>{
    if(req.session.username){
     req.session.destroy();
     res.sendFile(path.join(__dirname,"..","public/logout.html"));
    }
    else
    res.redirect("/login");
 })
router.get("/dashboard",(req,res)=>{
    if(req.session.username)
    res.sendFile(path.join(__dirname,"..","public","dashboard.html"));    // __dirname+"/public/dashboard.html"
else
     res.redirect("/login");
})


router.get("/login",(req,res)=>{
    if(req.session.username){
        res.redirect("/dashboard");
    }
    else
  res.sendFile(path.join(__dirname,"..","public","index.html"));
})

module.exports=router;