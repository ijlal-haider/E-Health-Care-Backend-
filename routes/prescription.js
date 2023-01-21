const express = require('express')
const { getPrescriptions, createPrescription, deletePrescription, getPrescription } = require('../controllers/prescriptionController')

//routers
const router = express.Router();

//GET all Admins
router.get('/', getPrescriptions)

//GET a single admin
router.get('/:id', getPrescription)

// //POST a new Admin
router.post('/', createPrescription)

// //DELETE a admin
router.delete('/:id', deletePrescription)


module.exports = router
