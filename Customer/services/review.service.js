// services/reviewService.js
import Review from '../models/review.model.js';  // Import the Review model

// Create a new review
const createReview = async (data) => {
  const review = new Review(data);
  return await review.save();
};

// Get all reviews
const getReviews = async (orderId, customerId) => {
  var filter = {};
  if(orderId){
    filter = {...filter, orderId}
  }
  if(customerId){
    filter = {...filter, customerId}
  }
  
  return await Review.find(filter);

};

// Get a review by ID
const getReviewById = async (id) => {
  return await Review.findById(id);
};

// Update a review by ID
const updateReview = async (id, updatedData) => {
  return await Review.findByIdAndUpdate(id, updatedData, { new: true });
};

// Delete a review by ID
const deleteReview = async (id) => {
  return await Review.findByIdAndDelete(id);
};

export default {
  createReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
