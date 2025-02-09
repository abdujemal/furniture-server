// models/customer.model.js
import mongoose from 'mongoose';

const RawMaterialSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    unit: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  }, { _id: false });
  
  const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sku: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    relatedFiles: { type: [String], default: [] },
    labourCost: { type: Number, default: 0 },
    overhead: { type: Number, default: 0 },
    profit: { type: Number, default: 0 },
    size: { type: String, required: true },
    images: { type: [String], default: [] },
    price: { type: Number, required: true },
    tags: { type: [String], default: [] },
    rawMaterials: { type: [RawMaterialSchema], default: [] },
    rawMaterialIds: { type: [String], default: [] },
  });

const ProductModel =  mongoose.model('Product', ProductSchema);

export default ProductModel

/**

[
  {
    "name": "Ergonomic Office Chair",
    "sku": "EOC1234",
    "category": "Furniture",
    "description": "An ergonomic office chair designed for long hours of comfortable seating.",
    "relatedFiles": ["https://example.com/product_manual.pdf", "https://example.com/product_video.mp4"],
    "labourCost": 50,
    "overhead": 20,
    "profit": 100,
    "size": "Large",
    "images": ["https://example.com/product_image1.jpg", "https://example.com/product_image2.jpg"],
    "price": 299.99,
    "tags": ["office", "ergonomic", "chair"],
    "rawMaterials": [
      {
        "id": "RM123",
        "name": "Leather",
        "unit": "Square Foot",
        "unitPrice": 5.00,
        "quantity": 10,
        "totalPrice": 50.00
      },
      {
        "id": "RM124",
        "name": "Steel Frame",
        "unit": "Piece",
        "unitPrice": 30.00,
        "quantity": 1,
        "totalPrice": 30.00
      },
      {
        "id": "RM125",
        "name": "Foam Cushion",
        "unit": "Square Meter",
        "unitPrice": 12.00,
        "quantity": 3,
        "totalPrice": 36.00
      }
    ],
    "rawMaterialIds": ["RM123", "RM124", "RM125"]
  },
  {
    "name": "Wireless Headphones",
    "sku": "WH1234",
    "category": "Electronics",
    "description": "Bluetooth wireless headphones with noise-canceling technology.",
    "relatedFiles": ["https://example.com/headphones_manual.pdf", "https://example.com/headphones_video.mp4"],
    "labourCost": 20,
    "overhead": 10,
    "profit": 40,
    "size": "Medium",
    "images": ["https://example.com/headphones_image1.jpg", "https://example.com/headphones_image2.jpg"],
    "price": 149.99,
    "tags": ["electronics", "wireless", "headphones"],
    "rawMaterials": [
      {
        "id": "RM126",
        "name": "Plastic Housing",
        "unit": "Piece",
        "unitPrice": 2.50,
        "quantity": 5,
        "totalPrice": 12.50
      },
      {
        "id": "RM127",
        "name": "Bluetooth Chip",
        "unit": "Piece",
        "unitPrice": 15.00,
        "quantity": 1,
        "totalPrice": 15.00
      },
      {
        "id": "RM128",
        "name": "Speaker Drivers",
        "unit": "Pair",
        "unitPrice": 25.00,
        "quantity": 2,
        "totalPrice": 50.00
      }
    ],
    "rawMaterialIds": ["RM126", "RM127", "RM128"]
  },
  {
    "name": "Smartphone Stand",
    "sku": "SS1234",
    "category": "Accessories",
    "description": "Adjustable smartphone stand with a 360-degree rotation.",
    "relatedFiles": [],
    "labourCost": 5,
    "overhead": 2,
    "profit": 15,
    "size": "One Size",
    "images": ["https://example.com/stand_image1.jpg", "https://example.com/stand_image2.jpg"],
    "price": 19.99,
    "tags": ["accessories", "smartphone", "stand"],
    "rawMaterials": [
      { "id": "RM129", "name": "Aluminum Alloy", "unit": "Piece", "unitPrice": 8.00, "quantity": 1, "totalPrice": 8.00 },
      { "id": "RM130", "name": "Rubber Pads", "unit": "Piece", "unitPrice": 0.50, "quantity": 4, "totalPrice": 2.00 }
    ],
    "rawMaterialIds": ["RM129", "RM130"]
  }
]


**/ 