const express=require("express");
const router=express.Router();

router.get("/dashboard",(req,res)=>{
    res.send("admin products dashboard");
})

module.exports=router;


