const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    email:String,
    pass:String
})

module.exports=mongoose.model("users",userSchema);