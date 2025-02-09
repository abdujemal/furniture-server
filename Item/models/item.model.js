import mongoose from 'mongoose';

const TimeLineSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
  }, { _id: false });
  
  const ItemSchema = new mongoose.Schema({
    image: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    pricePerUnit: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    lastUsedFor: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    timeLine: {
      type: [TimeLineSchema],
      default: [],
    }
  }, { timestamps: true });
  

const ItemModel =  mongoose.model('Item', ItemSchema);

export default ItemModel

/**

[
  {
    "image": "https://example.com/product-image1.jpg",
    "name": "Wireless Mouse",
    "category": "Electronics",
    "unit": "Piece",
    "pricePerUnit": 25.99,
    "description": "Wireless mouse with ergonomic design, perfect for office use.",
    "lastUsedFor": "Office setup",
    "quantity": 100,
    "timeLine": [
      {
        "date": "2025-01-10",
        "price": 22.99
      },
      {
        "date": "2025-02-01",
        "price": 25.99
      }
    ]
  },
  {
    "image": "https://example.com/product-image2.jpg",
    "name": "Smartphone Stand",
    "category": "Accessories",
    "unit": "Piece",
    "pricePerUnit": 15.50,
    "description": "Adjustable smartphone stand with a 360-degree rotation.",
    "lastUsedFor": "Work desk",
    "quantity": 50,
    "timeLine": [
      {
        "date": "2025-01-15",
        "price": 14.99
      },
      {
        "date": "2025-02-03",
        "price": 15.50
      }
    ]
  },
  {
    "image": "https://example.com/product-image3.jpg",
    "name": "Ergonomic Chair",
    "category": "Furniture",
    "unit": "Piece",
    "pricePerUnit": 180.00,
    "description": "Ergonomic chair designed for long hours of comfortable sitting.",
    "lastUsedFor": "Office setup",
    "quantity": 30,
    "timeLine": [
      {
        "date": "2025-01-20",
        "price": 170.00
      },
      {
        "date": "2025-02-01",
        "price": 180.00
      }
    ]
  },
  {
    "image": "https://example.com/product-image4.jpg",
    "name": "LED Desk Lamp",
    "category": "Furniture",
    "unit": "Piece",
    "pricePerUnit": 35.99,
    "description": "Energy-efficient LED desk lamp with adjustable brightness.",
    "lastUsedFor": "Desk lighting",
    "quantity": 80,
    "timeLine": [
      {
        "date": "2025-01-05",
        "price": 32.99
      },
      {
        "date": "2025-02-10",
        "price": 35.99
      }
    ]
  },
  {
    "image": null,
    "name": "Laptop Sleeve",
    "category": "Accessories",
    "unit": "Piece",
    "pricePerUnit": 12.00,
    "description": "Protective sleeve for laptops up to 15 inches.",
    "lastUsedFor": "Laptop protection",
    "quantity": 150,
    "timeLine": [
      {
        "date": "2025-01-12",
        "price": 11.50
      },
      {
        "date": "2025-02-05",
        "price": 12.00
      }
    ]
  }
]


**/ 