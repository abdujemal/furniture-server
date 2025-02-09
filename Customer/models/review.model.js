import mongoose  from 'mongoose';

const reviewSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', 
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  messege: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
}, { timestamps: true }); 

const Review = mongoose.model('Review', reviewSchema);

export default Review;

/**

[
  {
    "orderId": "60d8c45e8c6d6d23f8b1b64f",  // Example Order ObjectId
    "customerId": "60d8c45e8c6d6d23f8b1b64a",  // Example Customer ObjectId
    "customerName": "John Doe",
    "ratings": 5,
    "messege": "Excellent product! The quality is top-notch and the delivery was on time. I would highly recommend this to others.",
    "date": "2025-02-06T14:30:00Z"
  },
  {
    "orderId": "60d8c45e8c6d6d23f8b1b651",  // Example Order ObjectId
    "customerId": "60d8c45e8c6d6d23f8b1b65a",  // Example Customer ObjectId
    "customerName": "Jane Smith",
    "ratings": 4,
    "messege": "Good product, but the size didn't fit as expected. Customer service was helpful in resolving the issue.",
    "date": "2025-02-05T10:00:00Z"
  },
  {
    "orderId": "60d8c45e8c6d6d23f8b1b654",  // Example Order ObjectId
    "customerId": "60d8c45e8c6d6d23f8b1b659",  // Example Customer ObjectId
    "customerName": "Michael Johnson",
    "ratings": 3,
    "messege": "Product was okay, but arrived later than expected. Packaging could be better.",
    "date": "2025-02-04T16:45:00Z"
  },
  {
    "orderId": "60d8c45e8c6d6d23f8b1b652",  // Example Order ObjectId
    "customerId": "60d8c45e8c6d6d23f8b1b657",  // Example Customer ObjectId
    "customerName": "Emily Davis",
    "ratings": 2,
    "messege": "Not satisfied with the product quality. The material feels cheap, and it broke after a few uses.",
    "date": "2025-02-03T12:15:00Z"
  }
]

**/ 