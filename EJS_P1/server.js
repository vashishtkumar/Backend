const express=require("express");
const path=require("path");

const app=express();
let port=5000;

app.use(express.static("./public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    // res.sendFile(path.join(__dirname+"/public/home.html"));

    res.render("home",{name:"vashisht",info:[2211981457,"Chitkara University","3rd Year","Web Developer","JAVA and DSA","Devops","Engineer"]});
})

app.listen(port,(err)=>{
    if(err){
        console.log("An error has been occured");
    }
    else
    console.log(`Server listening at port ${port}`);
})