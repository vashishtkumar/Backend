const express=require("express");
const fs=require("fs");

const app=express();
const port=3001;

app.use(express.static("./public"));
app.use(express.urlencoded({extended:false}));

app.post("/login",(req,res)=>{
    console.log(req.body);

    fs.readFile("./user.json","utf-8",(err,data)=>{
        data=JSON.parse(data);
        let result=data.filter((item)=>{
            if(item.username==req.body.username && item.password==req.body.password){
                  return true;
            }
        })
        if(result.length==0){
            res.send("not a valid user");
        }
        else
        res.send(`welcome ${req.body.username}`);
    // if(result[0]){
    //     res.send(`Welcome ${req.body.username}`);
    // }
    // else
    // res.send("not a valid user");
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log("Unable to start the server");
    }
    else
    console.log(`server is started at port ${port}`);

})