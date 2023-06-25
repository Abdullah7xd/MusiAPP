const mongoose = require('../connections');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    cpassword:String
});

module.exports = mongoose.model("users",userSchema)