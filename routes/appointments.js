const express = require('express')
const { getAppointments } = require('../controllers/appointmentsController')

//routers
const router = express.Router();

//GET all Admins
router.get('/', getAppointments)

// //GET a single admin
// router.get('/:id', getAppointment)

// // //POST a new Admin
// router.post('/', createAppointment)

// // //DELETE a admin
// router.delete('/:id', deleteAppointment)

// // //UPDATE a admin
// router.patch('/:id', updateAppointment)

module.exports = router
