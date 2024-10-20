const express=require("express");
const mongoose=require("mongoose");
const Users=require("./models/userModel");
const app=express();
mongoose.connect("mongodb+srv://vashisht:Vashisht83@cluster0.z2mmu.mongodb.net/BatchMongodb?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected successfully");
})
.catch((err)=>{
    console.log("error occured",err);
})

app.get("/savedata",(req,res)=>{
    let obj=[{
        email:"test@gmail.com",
        pass:"123"
    },
    {
        email:"test1@gmail.com",
        pass:"123"
    },
    {
        email:"test2@gmail.com",
        pass:"123"
    }

]
     
    
    Users.insertMany(obj).then((res)=>{
        console.log(res);
    })
    .catch((error)=>{
        console.log("An error has been occured",error);
    })
    res.end("added succesfully");

})


app.get("/find/:id",(req,res)=>{
Users.find({}).then((res1)=>{
    console.log(res1);
    res.end(JSON.stringify(res1));
})
})

app.get("/update/:id",(req,res)=>{
    Users.findByIdAndUpdate(req.params.id,{email:"updated@gmail.com"}).then(()=>{
        console.log(done);
        res.send("done");
    })
    .catch((err)=>{
        console.log("unable to do that",err);
        res.send("not done");
    })
    
})

app.get("/delete/:id",(req,res)=>{
    Users.findByIdAndDelete(req.params.id).then(()=>{
        console.log("deleted succesfully");
    })
})


app.listen(3000,(err)=>{
    if(err){
        console.log("error has been occured");
    }
    else
    console.log(`connected at port ${3000}`);
})
