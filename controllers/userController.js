const { default: mongoose } = require('mongoose')
const User = require('../models/UserModel')

//GET all Admins Record
const getUsers = async(req, res, next) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}
//GET a single admin
// const getAdmin = async(req, res) => {
//     const {id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No Admin Exist'})
//     }
//     const admin = await Admin.findById(id)
    
//     if(!admin) {
//         return res.status(404).json({error: 'No Admin exist'})
//     }
//     res.status(200).json(admin)
// }

//POST a new Admin
const createUser = async(req, res)=>{
    const {name, email, phone, password, role} = req.body   

    try{
        const user = await User.create({name, email, phone, password, role})  
        // const dataToSave = admin.save();
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//DELETE a Admin
// const deleteAdmin= async(req, res) => {
//     const {id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No Admin Exist'})
//     }
    
//     const admin = await Admin.findByIdAndDelete({_id: id})

//     if(!admin) {
//         return res.status(400).json({error: 'No admin exist'})
//     }

//     res.status(200).json(admin)

// } 

// //UPDATE a admin
// const updateAdmin = async(req, res)=>{
//     const {id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No Admin Exist'})
//     }
    
//     const admin = await Admin.findOneAndUpdate({_id: id},{
//         ...req.body
//     })

//     if(!admin) {
//         return res.status(400).json({error: 'No admin exist'})
//     }

//     res.status(200).json(admin) 
// }
module.exports = {
    createUser,
    getUsers
    
}