const mongoose = require('mongoose');

//Schema - Schema Define the structure of particular document or type of document inside database
const doctorSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    specialization: {
        type: String
    },
    about: {
        type: String
    },
    qualification: {
        type: String
    },
    experience: {
        type: String
    },
    clinicLocation: {
        type: String
    },
    services: {
        type: String
    },
    fee: {
        type: Number, 
    },
    picture:{
        type: String
    }

}, {timestamps: true})

//Model - Model help us to apply the schema
module.exports = mongoose.model('Doctor', doctorSchema)