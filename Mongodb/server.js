 const express=require("express");
 const mongodb=require("mongodb");
 const app=express();


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
       res.send(JSON.stringify(res1));
    })
 })

 app.get("/store",(req,res)=>{
    let obj={
        name:"newdata",
       age:30
    }
    dinstance.collection("student").insertOne(obj);
    res.send("inserted succesfully");
 })

 app.listen(3000,(err)=>{
    console.log("connected at port 3000");
 })


