const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    cpassword:String
});

module.exports = mongoose.model("users",userSchema)