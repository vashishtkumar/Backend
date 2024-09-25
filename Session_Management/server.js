/*
//express
//express-session
//cookie-parser
*/

const express=require("express");
const session=require("express-session");
const cookieparser=require("cookie-parser");
const fs=require("fs");
const userRoutes=require("./Routing/userRoutes");
const adminRoutes=require("./Routing/adminRoutes");


const app=express();
const port=3000;
let oneday=1000*24*60*60;  // miliseconds

app.use(express.static("./public"));
app.use(express.urlencoded());
app.use(cookieparser());
app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:'Vashisht90',
    cookie:{maxAge:oneday}
}))

app.use("/",userRoutes);
app.use("/admin",admintest,adminRoutes);

function admintest(req,res,next){
if(req.session.role=="admin")
    next();
else
res.redirect("/login");
}

// app.get("/logout",(req,res)=>{
//     req.session.destroy();
//     res.sendFile(__dirname+"/public/logout.html");
// })
// app.get("/dashboard",(req,res)=>{
//     if(req.session.username)
//     res.sendFile(__dirname+"/public/dashboard.html");
// else
//      res.redirect("/login");
// })


// app.get("/login",(req,res)=>{
//     if(req.session.username){
//         res.redirect("/dashboard");
//     }
//     else
//   res.sendFile(__dirname+"/public/index.html");
// })


app.post("/login",(req,res)=>{
    
    fs.readFile("./user.json","utf-8",(err,data)=>{
        if(err){
            res.send("unable to read the file");
        }
        else
        {
            data=JSON.parse(data);
            let result=data.filter((item)=>{
                if(req.body.username==item.username && req.body.password==item.password)
                    return true;
            })
            if(result[0]){
                req.session.username=req.body.username;
                req.session.role=result[0].role;
                res.redirect("/dashboard");
               // res.send(`welcome ${req.body.username}`);
            }
            else
            res.send("user does not exists");
        }
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log("an error has been occured");
    }
    else
    {
        console.log(`server started at ${port}`);
    }
})
