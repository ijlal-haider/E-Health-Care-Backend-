const mongoose =require("mongoose");
const Schema = mongoose.Schema;

let doctor = new Schema({
    doctorName: {
        type: String
    },
    specialization: {
        type: String
    },
    qualification: {
        type: String
    }

})

module.exports = mongoose.model('doctor', doctor) 