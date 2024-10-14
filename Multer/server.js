const express=require("express");
const app=express();
let port=3000;
let path=require("path");
const multer=require("multer");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const mstorage=multer.diskStorage({
         destination:(req,file,cb)=>{
          cb(null,"./public/files");
         },
         filename:(req,file,cb)=>{
            console.log(file);
            const ext=file.mimetype.split("/")[1];
            cb(null,"test."+ext);
         }
})

const upload=multer({storage:mstorage});


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","upload.html"));
    
})


app.post("/uploadFile",upload.single("pic"),(req,res)=>{
res.send("uploaded succesfully");
})




app.listen(port,(err)=>{
    if(err){
        console.log("An error has been occured");
    }
    else
    {
        console.log(`server is started at port ${port}`);
    }
})