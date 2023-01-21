const mongoose = require('mongoose');

//Schema - Schema Define the structure of particular document or type of document inside database
const appointmentSchema = mongoose.Schema({
    // doctor:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Doctor"
    // },
    // patient: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Patient"
    // },
    appointmentFee: {
        type: Number
    },

}, {timestamps: true})

//Model - Model help us to apply the schema
module.exports = mongoose.model('Appointment', appointmentSchema)