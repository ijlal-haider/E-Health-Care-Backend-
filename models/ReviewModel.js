const mongoose = require('mongoose');

//Schema - Schema Define the structure of particular document or type of document inside database
const reviewSchema = mongoose.Schema({
    comments: { 
        type: String
    },
    // patient: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Patient"
    // },
    // doctor:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Doctor"
    // },
    reviewAt: { 
        type: Date, 
        immutable: true,
        default: ()=> Date.now() 
    },


}, {timestamps: true})

//Model - Model help us to apple the schema
module.exports = mongoose.model('Review', reviewSchema)