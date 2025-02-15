// services/reviewService.js
import Review from '../models/review.model.js';  // Import the Review model

// Create a new review
const createReview = async (data) => {
  try{
    const review = new Review(data);
    return await review.save();
  }catch(error){
    console.error('Error creating Review', error);
    throw new Error('Error creating Review');
  }
};

// Get all reviews
const getReviews = async (orderId, customerId) => {
  try{
    var filter = {};
    if(orderId){
      filter = {...filter, orderId}
    }
    if(customerId){
      filter = {...filter, customerId}
    }
    
    return await Review.find(filter);

  }catch(error){
    console.error('Error getReviews', error);
    throw new Error('Error getting Reviews');
  }

};

// Get a review by ID
const getReviewById = async (id) => {
  try{
    return await Review.findById(id);

  }catch(error){
    console.error('Error getReviewById', error);
    throw new Error('Error getting Review By Id');
  }
};

// Update a review by ID
const updateReview = async (id, updatedData) => {
  try{
    return await Review.findByIdAndUpdate(id, updatedData, { new: true });

  }catch(error){
    console.error('Error updateReview', error);
    throw new Error('Error updating Review');
  }
};

// Delete a review by ID
const deleteReview = async (id) => {
  try{
    return await Review.findByIdAndDelete(id);

  }catch(error){
    console.error('Error deleteReview', error);
    throw new Error('Error deleting Review');
  }
};

export default {
  createReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
