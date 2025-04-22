// models/customer.model.js
import mongoose from 'mongoose';

const OrderProductSchema = new mongoose.Schema({
  productId: {
    type: String,
    default: "",
  },
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productSku: {
    type: String,
    default: "",
  },
  imgUrl: {
    type: String,
    default: "",
  },
  productDescription: {
    type: String,
    default: "",
  },
  quantity: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

const OrderSchema = new mongoose.Schema({
    _id: {
      type: String,
      required: true,
    },
    products: {
      type: [OrderProductSchema],
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    payedPrice: {
      type: Number,
      required: true,
    },
    deliveryPrice: {
      type: Number,
      required: true,
    },
    orderedDate: {
      type: String,
      required: true,
    },
    finishedDate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Proccessing", "Completed", "Delivered", "Ready"],
      required: true,
    },
    sefer: {
      type: String,
      default: "",
    },
    customerSource: {
      type: String,
      required: true,
    },
    kk: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    deliveryOption: {
      type: String,
      required: true,
    },
    customerGender: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
      default: null,
    },
    bankAccount: {
      type: String,
      default: null,
    },
    withReciept: {
      type: Boolean,
      required: true,
    },
    itemsUsed: {
      type: [String],
      default: [],
    },
    employees: {
      type: [String],
      default: [],
    }
  }, { timestamps: true });
  

const OrderModel =  mongoose.model('MyOrder', OrderSchema);

export default OrderModel

/**
 [
  {
    "customerName": "John Doe",
    "phoneNumber": "+1234567890",
    "productId": "P98765",
    "productName": "Bluetooth Speaker",
    "productPrice": 49.99,
    "payedPrice": 45.00,
    "deliveryPrice": 5.00,
    "productSku": "BS-XYZ-001",
    "quantity": 1,
    "color": "Blue",
    "size": "N/A",
    "orderedDate": "2025-02-05",
    "finishedDate": "2025-02-06",
    "status": "Shipped",
    "sefer": "A1B2C3",
    "customerSource": "Website",
    "kk": "D12345E6789",
    "location": "Los Angeles, CA, USA",
    "paymentMethod": "Credit Card",
    "deliveryOption": "Standard Shipping",
    "customerGender": "Male",
    "imgUrl": "https://example.com/product-image.jpg",
    "productDescription": "Portable Bluetooth speaker with 10 hours of battery life and deep bass.",
    "customerId": "C00123",
    "bankAccount": null,
    "withReciept": true,
    "itemsUsed": ["Promo10"],
    "employees": ["E001", "E002"]
  },
  {
    "customerName": "Alice Smith",
    "phoneNumber": "+9876543210",
    "productId": "P12345",
    "productName": "Wireless Headphones",
    "productPrice": 99.99,
    "payedPrice": 95.00,
    "deliveryPrice": 7.00,
    "productSku": "WH-ABC-001",
    "quantity": 2,
    "color": "Black",
    "size": "N/A",
    "orderedDate": "2025-02-03",
    "finishedDate": "2025-02-05",
    "status": "Delivered",
    "sefer": "B4D5E6",
    "customerSource": "Instagram",
    "kk": "XY98765Z4321",
    "location": "Miami, FL, USA",
    "paymentMethod": "PayPal",
    "deliveryOption": "Express Shipping",
    "customerGender": "Female",
    "imgUrl": "https://example.com/another-product-image.jpg",
    "productDescription": "Noise-cancelling wireless headphones with high-quality sound.",
    "customerId": "C00567",
    "bankAccount": "123456789",
    "withReciept": true,
    "itemsUsed": ["WinterSale"],
    "employees": ["E003", "E004"]
  },
  {
    "customerName": "David Lee",
    "phoneNumber": "+1122334455",
    "productId": "P55555",
    "productName": "Smartwatch",
    "productPrice": 149.99,
    "payedPrice": 140.00,
    "deliveryPrice": 10.00,
    "productSku": "SW-XYZ-002",
    "quantity": 1,
    "color": "Silver",
    "size": "N/A",
    "orderedDate": "2025-02-01",
    "finishedDate": "2025-02-03",
    "status": "Pending",
    "sefer": "F1G2H3",
    "customerSource": "Referral",
    "kk": "AA98765BB4321",
    "location": "Chicago, IL, USA",
    "paymentMethod": "Credit Card",
    "deliveryOption": "Standard Shipping",
    "customerGender": "Male",
    "imgUrl": "https://example.com/smartwatch-image.jpg",
    "productDescription": "Smartwatch with fitness tracking and heart rate monitor.",
    "customerId": "C00987",
    "bankAccount": null,
    "withReciept": false,
    "itemsUsed": ["ReferralBonus"],
    "employees": ["E005", "E006"]
  },
  {
    "customerName": "Sophia Brown",
    "phoneNumber": "+9988776655",
    "productId": "P78901",
    "productName": "Fitness Tracker",
    "productPrice": 29.99,
    "payedPrice": 25.00,
    "deliveryPrice": 5.00,
    "productSku": "FT-XYZ-003",
    "quantity": 1,
    "color": "Pink",
    "size": "N/A",
    "orderedDate": "2025-02-02",
    "finishedDate": "2025-02-04",
    "status": "Delivered",
    "sefer": "H4I5J6",
    "customerSource": "Facebook",
    "kk": "ZZ12345A6789",
    "location": "San Francisco, CA, USA",
    "paymentMethod": "PayPal",
    "deliveryOption": "Express Shipping",
    "customerGender": "Female",
    "imgUrl": "https://example.com/fitness-tracker-image.jpg",
    "productDescription": "Fitness tracker with step counting and sleep monitoring features.",
    "customerId": "C01234",
    "bankAccount": null,
    "withReciept": true,
    "itemsUsed": ["SummerDeal"],
    "employees": ["E007", "E008"]
  }
]
**/ 