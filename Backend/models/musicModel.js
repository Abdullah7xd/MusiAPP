const mongoose = require('../connections');

const userSchema=new mongoose.Schema({
    title:String,
    singer:String,
    lyrics:String,
    image:String,
    file:String,
    cover:String,
});

module.exports = mongoose.model("music",userSchema)