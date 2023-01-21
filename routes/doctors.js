const express = require('express')
const {getDoctors, getDoctor, createDoctor, updateDoctor, deleteDorctor,upload} = require('../controllers/doctorControllers')

//routers
const router = express.Router();

//GET all doctors
router.get('/', getDoctors)

//GET a single doctor
router.get('/:id', getDoctor)

//POST a new doctor
router.post('/', upload.single('picture'),createDoctor)

//DELETE a doctor
router.delete('/:id', deleteDorctor)

//UPDATE a doctor
router.patch('/:id', updateDoctor)

module.exports = router
