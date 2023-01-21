const express = require('express')
const { getReviews, createReview, getReview, deleteReview } = require('../controllers/reviewController')

//routers
const router = express.Router();

//GET all Reviews
router.get('/', getReviews)

//GET a single review
router.get('/:id', getReview)

// //POST a new review
router.post('/', createReview)

// //DELETE a review
router.delete('/:id', deleteReview)


module.exports = router
