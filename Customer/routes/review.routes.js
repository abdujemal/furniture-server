import express from 'express';
import reviewController from '../controllers/review.controller.js';

const router = express.Router();

// POST: Create a new review
router.post('', reviewController.addReview);

// GET: Get all reviews
router.get('', reviewController.getAllReviews);

// GET: Get a review by ID
router.get('/:id', reviewController.getReviewById);

// PUT: Update a review by ID
router.put('/:id', reviewController.updateReview);

// DELETE: Delete a review by ID
router.delete('/:id', reviewController.deleteReview);

export default router;
