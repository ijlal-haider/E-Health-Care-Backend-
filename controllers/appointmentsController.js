const { default: mongoose } = require('mongoose')
const Appointment = require('../models/AppointmentModel')

//GET all doctors
const getAppointments = async(req, res) => {
    const doctors = await Appointment.find({}).sort({createdAt: -1})

    res.status(200).json(doctors)
}

//GET a single doctor
// const getAppointment = async(req, res) => {
//     const {id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No Doctor Exist'})
//     }
//     const doctor = await Doctor.findById(id)
    
//     if(!doctor) {
//         return res.status(404).json({error: 'No Doctor exist'})
//     }
//     res.status(200).json(doctor)
// }

// //POST a new doctor
// const createAppointment = async(req, res)=>{
//     const {doctorName, phoneNo, emailId, gender, specialization, about, qualification, experience} = req.body   // password, gender, specialization, about, qualification, experience, picture, profileStatus

//     try{
//         const doctor = await Doctor.create({doctorName, phoneNo, emailId,  gender, specialization, about, qualification, experience})  // password, gender, specialization, about, qualification, experience, picture, profileStatus
//         res.status(200).json(doctor)
//     }
//     catch(error){
//         res.status(400).json({error: error.message})
//     }
// }


// //DELETE a doctor
// const deleteAppointment = async(req, res) => {
//     const {id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No Doctor Exist'})
//     }
    
//     const doctor = await Doctor.findByIdAndDelete({_id: id})

//     if(!doctor) {
//         return res.status(400).json({error: 'No Doctor exist'})
//     }
//     res.status(200).json(doctor)

// } 

// //UPDATE a doctor
// const updateApointment = async(req, res)=>{
//     const {id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No Doctor Exist'})
//     }
    
//     const doctor = await Doctor.findOneAndUpdate({_id: id},{
//         ...req.body
//     })

//     if(!doctor) {
//         return res.status(400).json({error: 'No Doctor exist'})
//     }

//     res.status(200).json(doctor) 
// }


module.exports = {
    // createDoctor,
    getAppointments,
    // getDoctor,
    // updateDoctor,
    // deleteDorctor

}