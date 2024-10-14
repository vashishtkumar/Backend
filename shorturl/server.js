const express=require("express");
const app=express();
const crypto = require('crypto');

const fs=require("fs");
let port=3000;

app.use(express.static("./public"));
app.use(express.urlencoded());
app.use(express.json());


const urlDatabase = {};

app.post("/short", (req, res) => {
    const originalUrl = req.body.url;
    
    if (!originalUrl) {
        return res.status(400).json({ error: 'No URL provided' });
    }

    const shortUrl = crypto.randomBytes(3).toString('hex'); 
    urlDatabase[shortUrl] = originalUrl;

    res.json({
        originalUrl,
        shortUrl: `http://yourdomain.com/${shortUrl}`
    });
});


app.listen(port,(err)=>{
    if(err){
        console.log("server not started! An error has been occured" ,err);
    }
    else
    console.log(`serevr started at port ${port}`);
})