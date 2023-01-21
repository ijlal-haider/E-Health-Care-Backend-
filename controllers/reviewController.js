const { default: mongoose } = require('mongoose')
const Review = require('../models/ReviewModel')

//GET all Review Record
const getReviews = async(req, res, next) => {
    const reviews = await Review.find({}).sort({createdAt: -1})

    res.status(200).json(reviews)
}
//GET a single Review
const getReview = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Review Exist'})
    }
    const review = await Review.findById(id)
    
    if(!review) {
        return res.status(404).json({error: 'No Review exist'})
    }
    res.status(200).json(review)
}

//POST a new Review
const createReview = async(req, res)=>{
    const {comments} = req.body   

    try{
        const review = await Review.create({comments})  // review
        res.status(200).json(review)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// //DELETE a review
const deleteReview= async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Review Exist'})
    }
    
    const review = await Review.findByIdAndDelete({_id: id})

    if(!review) {
        return res.status(400).json({error: 'No review exist'})
    }
    res.status(200).json(review)
} 


module.exports = {
    getReviews,
    getReview,
    createReview,
    deleteReview    
}