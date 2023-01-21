const express = require('express')
const { getUsers, createUser } = require('../controllers/userController')

//routers
const router = express.Router();

//GET all Admins
router.get('/', getUsers)

//GET a single admin
// router.get('/:id', getAdmin)

// //POST a new Admin
router.post('/', createUser)

// //DELETE a admin
// router.delete('/:id', deleteAdmin)

// //UPDATE a admin
// router.patch('/:id', updateAdmin)

module.exports = router
