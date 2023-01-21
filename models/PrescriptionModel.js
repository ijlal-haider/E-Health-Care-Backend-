const mongoose = require('mongoose');

//Schema - Schema Define the structure of particular document or type of document inside database
const prescriptionSchema = mongoose.Schema({
    medicine:{
        type: String
    },
    instructions: {
        type: String
    },

}, {timestamps: true})

//Model - Model help us to apply the schema
module.exports = mongoose.model('Prescription', prescriptionSchema)