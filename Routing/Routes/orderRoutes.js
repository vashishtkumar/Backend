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

module.exports=router;