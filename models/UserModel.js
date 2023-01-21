const mongoose = require('mongoose');

//Schema - Schema Define the structure of particular document or type of document inside database
const userSchema = mongoose.Schema({
    name:{
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password:{
        type: String
    },
    role:{
        type: String
    }
}, {timestamps: true})

//Model - Model help us to apply the schema
module.exports = mongoose.model('User', userSchema)