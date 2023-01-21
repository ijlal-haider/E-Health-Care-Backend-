const { default: mongoose } = require('mongoose')
const Admin = require('../models/AdminModel')

//GET all Admins Record
const getAdmins = async(req, res, next) => {
    const admins = await Admin.find({}).sort({createdAt: -1})

    res.status(200).json(admins)
}
//GET a single admin
const getAdmin = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Admin Exist'})
    }
    const admin = await Admin.findById(id)
    
    if(!admin) {
        return res.status(404).json({error: 'No Admin exist'})
    }
    res.status(200).json(admin)
}

//POST a new Admin
const createAdmin = async(req, res)=>{
    const {adminName, adminEmail, adminPhone, adminPic} = req.body   // adminName, adminEmail, adminPhone, adminPic

    try{
        const admin = await Admin.create({adminName, adminEmail, adminPhone, adminPic})  // adminName, adminEmail, adminPhone, adminPic
        // const dataToSave = admin.save();
        res.status(200).json(admin)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//DELETE a Admin
const deleteAdmin= async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Admin Exist'})
    }
    
    const admin = await Admin.findByIdAndDelete({_id: id})

    if(!admin) {
        return res.status(400).json({error: 'No admin exist'})
    }

    res.status(200).json(admin)

} 

//UPDATE a admin
const updateAdmin = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Admin Exist'})
    }
    
    const admin = await Admin.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!admin) {
        return res.status(400).json({error: 'No admin exist'})
    }

    res.status(200).json(admin) 
}
module.exports = {
    getAdmins,
    getAdmin,
    createAdmin,
    deleteAdmin,
    updateAdmin
    
}