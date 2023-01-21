const mongoose = require('mongoose');

//Schema - Schema Define the structure of particular document or type of document inside database
const patientSchema = mongoose.Schema({
    patientName:{
        type: String,
        require: true
    },
    patientEmail: {
        type: String,
        require: true
    },
    patientPhone: {
        type: String
    },
    patientGender: {
        type: String
    },
    patientAddress: {
        type: String
    },
    patientAge: {
        type: Number,
        min: 1
    },
    patientBloodGroup: {
        type: String
    },
    patientBP: {
        type: String
    },
    patientLabReport: {
        type: String
    },
    patientWeight: {
        type: Number
    },
    patientTemprature: {
        type: String
    },
    patientPic: {
        type: String
    },

}, {timestamps: true})

//Model - Model help us to apply the schema
module.exports = mongoose.model('Patient', patientSchema)