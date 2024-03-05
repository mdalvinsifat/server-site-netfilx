const mongoose = require('mongoose')


const MongooseSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,

    }
})

const User = mongoose.model("authention", MongooseSchema)

module.exports = User