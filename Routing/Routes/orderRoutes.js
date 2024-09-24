const express=require("express");

const router=express.Router();

/*
/order
/order/history
/order/deails
*/
router.get("/",(req,res)=>{
    res.send("order home page");
})

router.get("/history",(req,res)=>{
    res.send("order history page");
})

router.get("/details",(req,res)=>{
    res.send("order details page");
})
router.get("/xy*ab",(req,res)=>{
    res.send("regular expression it is");
})
module.exports=router;