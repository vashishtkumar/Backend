const express=require("express");
const app=express();

app.use(express.static("."));




app.listen(3000,(err)=>{
    if(err){
        console.log("an error has been occured");
    }
    else{
        let port=3000;
     console.log(`connected at port ${port}`);
    }
})