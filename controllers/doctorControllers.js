const { default: mongoose } = require('mongoose')
const Doctor = require('../models/DoctorModel')
const multer = require('multer');


// Upload Image 
const Storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(null, Date.now()+' '+file.originalname)
      },
})
  
const upload = multer({
    storage: Storage
  });


//GET all doctors
const getDoctors = async(req, res) => {
    const doctors = await Doctor.find({}).sort({createdAt: -1})

    res.status(200).json(doctors)
}

//GET a single doctor
const getDoctor = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Doctor Exist'})
    }
    const doctor = await Doctor.findById(id)
    
    if(!doctor) {
        return res.status(404).json({error: 'No Doctor exist'})
    }
    res.status(200).json(doctor)
}

//POST a new doctor
const createDoctor = async(req, res)=>{
    
    const {name, email, phone, gender, address, specialization, about, qualification, experience, clinicLocation, services, fee, picture} = req.body   // name, email, phone, gender, address, specialization, about, qualification, experience, clinicLocation, services, fee, picture

    try{
        const doctor = await Doctor.create({name, email, phone, gender, address, specialization, about, qualification, experience, clinicLocation, services, fee, picture})  // name, email, phone, gender, address, specialization, about, qualification, experience, clinicLocation, services, fee, picture
        res.status(200).json(doctor)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
    con
}


//DELETE a doctor
const deleteDorctor = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Doctor Exist'})
    }
    
    const doctor = await Doctor.findByIdAndDelete({_id: id})

    if(!doctor) {
        return res.status(400).json({error: 'No Doctor exist'})
    }

    res.status(200).json(doctor)

} 


//UPDATE a doctor
const updateDoctor = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Doctor Exist'})
    }
    
    const doctor = await Doctor.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!doctor) {
        return res.status(400).json({error: 'No Doctor exist'})
    }

    res.status(200).json(doctor) 
}


module.exports = {
    createDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    deleteDorctor,
    upload

}