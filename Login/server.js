const express=require("express");

const app=express();


app.use(express.static("."));
app.use(express.urlencoded({extended:false}));

app.get("/getdata",(req,res)=>{
    console.log(req.query);
res.status(200).send("data recieved in form of qury string ");

})

app.post("/getdata",(req,res)=>{
    console.log(req.body);
    res.send("data received: " + JSON.stringify(req.body));
}
)

app.listen(3000,(err)=>{
    console.log("connected at 3000 port");
})