const { default: mongoose } = require('mongoose')
const Prescription = require('../models/PrescriptionModel')

//GET all Prescription Record
const getPrescriptions = async(req, res, next) => {
    const prescriptions = await Prescription.find({}).sort({createdAt: -1})

    res.status(200).json(prescriptions)
}
//GET a single Prescription
const getPrescription = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Prescription Exist'})
    }
    const prescription = await Prescription.findById(id)
    
    if(!prescription) {
        return res.status(404).json({error: 'No Prescription exist'})
    }
    res.status(200).json(prescription)
}

//POST a new Prescription
const createPrescription= async(req, res)=>{
    const {medicine, instructions} = req.body   

    try{
        const prescriptions = await Prescription.create({medicine, instructions})  // prescriptions
        res.status(200).json(prescriptions)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// //DELETE a Prescription
const deletePrescription= async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No prescription Exist'})
    }
    const prescription = await Prescription.findByIdAndDelete({_id: id})

    if(!prescription) {
        return res.status(400).json({error: 'No prescription exist'})
    }
    res.status(200).json(prescription)
} 


module.exports = {
    getPrescriptions,
    getPrescription,
    createPrescription,
    deletePrescription    
}