import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    sefer: {
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
    gender: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  }, { timestamps: true });

const CustomerModel = mongoose.model('Customer', CustomerSchema);

export default CustomerModel

/**
 [
  {
    "name": "Alice Smith",
    "phone": "+9876543210",
    "sefer": "A12B34",
    "kk": "XY9876543210",
    "location": "Los Angeles, CA, USA",
    "gender": "Female",
    "source": "Instagram",
    "date": "2025-02-01"
  },
  {
    "name": "Robert Johnson",
    "phone": "+1122334455",
    "sefer": "B56C78",
    "kk": "AB1234567890",
    "location": "Miami, FL, USA",
    "gender": "Male",
    "source": "Referral",
    "date": "2025-02-03"
  },
  {
    "name": "Maria Garcia",
    "phone": "+1555443322",
    "sefer": "C98D23",
    "kk": "CD1234567890",
    "location": "New York, NY, USA",
    "gender": "Female",
    "source": "Facebook",
    "date": "2025-01-28"
  },
  {
    "name": "James Lee",
    "phone": "+9988776655",
    "sefer": "D74E92",
    "kk": "EF9876543210",
    "location": "Chicago, IL, USA",
    "gender": "Male",
    "source": "Google Search",
    "date": "2025-02-02"
  },
  {
    "name": "Sophia Brown",
    "phone": "+1222333444",
    "sefer": "E31F25",
    "kk": "GH1234567890",
    "location": "San Francisco, CA, USA",
    "gender": "Female",
    "source": "Website",
    "date": "2025-01-30"
  }
]
**/