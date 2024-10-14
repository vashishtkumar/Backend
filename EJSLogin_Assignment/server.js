const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const session=require("express-session");
const cookieParser=require("cookie-parser");
const userRoutes=require("./Routes/userRoutes");
let port=3000;
const time=1000*60; // 1 hour;


app.use(express.static("./public"));
app.use(express.urlencoded());
app.use(exp)
app.use(cookieParser());
app.use("/",test,userRoutes);
// app.use(session({
//     saveUninitialized:true,
//     resave:false,
//     secret:"vashisht83",
//     cookie:{maxAge:time}
// }))

//app.set("view engine","ejs");


 function test(req,res,next){
     if(req.session.username){
         next();
     }
     else
     res.redirect("/");
}

app.post("/login",(req,res)=>{
    
fs.readFile("./user.json","utf-8",(err,data)=>{
    if(err){
        res.send("Eror cant able to fetch the data");
    }
    else
    {
        data=JSON.parse(data);
        let result=data.filter((item)=>{
            if(item.username==req.body.username && item.password==req.body.password)
                return true;
        })

        if(result.length==0){
            res.send("user does not exists");
        }
        else
         {req.session.username=req.body.username;
             req.session.name=result[0].name;
            res.sendFile(__dirname+"/public/dashboard.html");
        }
    }
})

})


app.listen(port,(err)=>{
    if(err){
        console.log("AN error has been occured " ,err);
    }
    else
    console.log(`server is running at port ${port}`);
})