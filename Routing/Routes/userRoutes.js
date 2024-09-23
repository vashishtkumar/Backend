const express=require("express");
const router=express.Router();

/*
/user
/user/history
/user/details
*/

router.get("/",(req,res)=>{
      res.send("user home page");
})

router.get("/details/:num",(req,res)=>{
    res.send("user home page"+ req.params.num);
})

router.get("/history/:id/good",(req,res)=>{
    res.send("user home page" + "and id is = " +req.params.id );
})

    module.exports=router;