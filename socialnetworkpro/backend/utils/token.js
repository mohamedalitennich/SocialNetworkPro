const jwt = require('jsonwebtoken');

// Secret key for JWT signing and encryption
const SECRET_KEY = process.env.JWT_SECRET || '1xRv.!!*+wOo';

// Function to create a JWT token
const createToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
};

// Function to verify a JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error('Token verification failed:', error.message);
    throw error;
  }
};

module.exports = {
  createToken,
  verifyToken,
};
