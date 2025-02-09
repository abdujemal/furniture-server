import express from 'express';
import reviewController from '../controllers/review.controller.js';

const router = express.Router();

// POST: Create a new review
router.post('/reviews', reviewController.addReview);

// GET: Get all reviews
router.get('/reviews', reviewController.getAllReviews);

// GET: Get a review by ID
router.get('/reviews/:id', reviewController.getReviewById);

// PUT: Update a review by ID
router.put('/reviews/:id', reviewController.updateReview);

// DELETE: Delete a review by ID
router.delete('/reviews/:id', reviewController.deleteReview);

export default router;
