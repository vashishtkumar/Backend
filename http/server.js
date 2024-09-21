const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html");
    if(req.url == "/" || req.url=="/index.html"){
    //    fs.readFile("./index.html","utf-8",(err,data)=>{
    //     res.write(data);
        res.end(readFile("./index.html"));
    //    })
    }
else if(req.url=="/contact.html"){
    // fs.readFile("./contact.html","utf-8",(err,data)=>{
    //     res.write(data);
         res.end(readFile("./contact.html"));
    //    })
}
else if(req.url=="/about.html"){
    // fs.readFile("./about.html","utf-8",(err,data)=>{
    //     res.write(data);
        res.end(readFile("./about.html"));
    //    })
}
})


server.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else
    console.log("connected at port 3000");
});

function readFile(filename){
    return fs.readFileSync(filename,"utf-8");
}
// server.on("connection",(socket)=>{
//     if(err){
//         console.log("error occured");
//     }
//     else
//     console.log("connected at port 3000");
// })