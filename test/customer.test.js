import request from 'supertest';
import { app } from '../index.js'; // Assuming you have an Express app

const customerData = {
  name: 'Alice Johnson',
  phone: '9876543210',
  sefer: 'S001',
  kk: 'KK001',
  location: 'New York, USA',
  gender: 'Female',
  source: 'Website',
  date: '2025-02-05T10:00:00Z',
};

describe('POST /customers', () => {
  it('should create a new customer', async () => {
    const response = await request(app)
      .post('/customers')  // Ensure this matches your route
      .send(customerData)  // Send JSON data
      // .expect('Content-Type', "application/json")  // Expect JSON response
      .expect(201);  // Expect created status

    expect(response.body).toHaveProperty('name', 'Alice Johnson');
    expect(response.body).toHaveProperty('phone', '9876543210');
  });
});
