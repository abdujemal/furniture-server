// controllers/reviewController.js

import reviewService from '../services/review.service.js';

// Handle creating a review
const addReview = async (req, res) => {
  try {
    const result = await reviewService.createReview(req.body);
    res.status(200).json({msg: "Created successfully.", result});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Handle getting all reviews
const getAllReviews = async (req, res) => {
    const { orderId,  customerId} = req.query

  try {
    const reviews = await reviewService.getReviews(orderId, customerId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Handle getting a review by ID
const getReviewById = async (req, res) => {
  try {
    const review = await reviewService.getReviewById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Handle updating a review
const updateReview = async (req, res) => {
  try {
    const result = await reviewService.updateReview(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json({msg: "Updated successfully.", result});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Handle deleting a review
const deleteReview = async (req, res) => {
  try {
    const deletedReview = await reviewService.deleteReview(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  addReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
