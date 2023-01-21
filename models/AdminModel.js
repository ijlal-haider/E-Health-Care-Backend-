const mongoose = require('mongoose');

//Schema - Schema Define the structure of particular document or type of document inside database
const adminSchema = mongoose.Schema({
    adminName:{
        type: String,
        require: true
    },
    adminEmail: {
        type: String,
        require: true
    },
    adminPhone: {
        type: String,
        require: true
    },
    adminPic: {
        type: String,
        require: true
    },

}, {timestamps: true})

//Model - Model help us to apply the schema
module.exports = mongoose.model('Admin', adminSchema)