const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html");
    const data=req.url;
    let filename="";
    console.log(data);
    if(req.url=="/")
        filename="index.html"
    else
    filename=data.substr(1);
       res.end(readFile(filename));
})


server.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else
    console.log("connected at port 3000");
});

function readFile(filename){
    try{
    return fs.readFileSync(filename,"utf-8");
}
catch(e){
return "";
}
}
