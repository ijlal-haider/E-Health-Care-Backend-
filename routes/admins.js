const express = require('express')
const { getAdmins, createAdmin, getAdmin, deleteAdmin, updateAdmin } = require('../controllers/adminControllers')

//routers
const router = express.Router();

//GET all Admins
router.get('/', getAdmins)

//GET a single admin
router.get('/:id', getAdmin)

// //POST a new Admin
router.post('/', createAdmin)

// //DELETE a admin
router.delete('/:id', deleteAdmin)

// //UPDATE a admin
router.patch('/:id', updateAdmin)

module.exports = router
