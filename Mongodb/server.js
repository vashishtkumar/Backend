 const express=require("express");
 const mongodb=require("mongodb");
 const app=express();

 app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

 const client=mongodb.MongoClient;
let dinstance;
 client.connect("mongodb://localhost:27017").then((database)=>{
   dinstance=database.db("BatchMongodb");
   console.log("databse connected");
 })
 .catch(()=>{
console.log("unable to connect database",err);
 })



 app.get("/",(req,res)=>{
    if(!dinstance){
        console.log("database not connected");
    }

    dinstance.collection("student").find({ }).toArray().then((res1)=>{
       res.render("home",{data:res1});
    })

 })

 app.get("/add",(req,res)=>{
    res.render("add");
 })
 app.post("/store",(req,res)=>{
    let obj={
        name:req.body.name,
       age:req.body.age
    }
    dinstance.collection("student").insertOne(obj);
    res.redirect("/");
 })
app.get("/deleteEndpoint",(req,res)=>{
    res.render("delete");
})
app.post("/delete",(req,res)=>{
    dinstance.collection("student").deleteOne({name:req.body.delname});
    res.redirect("/");
})


app.get("/updateEndpoint",(req,res)=>{
    res.render("update");
})

app.post("/update",(req,res)=>{
    dinstance.collection("student").updateMany({name:req.body.updateName},{$set:{"name":req.body.newName}})
    res.redirect("/");
})
 app.listen(3000,(err)=>{
    console.log("connected at port 3000");
 })


