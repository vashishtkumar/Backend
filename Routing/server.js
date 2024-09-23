const express=require("express");
const orderrouter=require("./Routes/orderRoutes");
const userRouer=require("./Routes/userRoutes");

const app=express();
let port=3000;

app.use(express.static("./public"));
app.use("/order",orderrouter);
app.use("/user",userRouer);
app.get("/login",(req,res)=>{
    console.log(req.url);
    res.send(`hello ${req.query.username} and your password = ${req.query.password} and your method is Get`);
})

app.get("*",(req,res)=>{
    res.status(404).send("page not found");
})

/*app.get("/order",(req,res)=>{
    console.log(req.url);
res.send("this is your order page");
})

app.get("/order/history",(req,res)=>{
    res.send("order history page");
})
app.get("/order/details",(req,res)=>{
    res.send("order details page");
})
*/

app.listen(port,(err)=>{
if(err){
    console.log("An error has occured",err);
}
else
console.log(`connected at port ${port}`,"ok vashisht");
})