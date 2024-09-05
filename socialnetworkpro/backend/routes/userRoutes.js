const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Public Routes
router.post('/register', userController.registerUser);  // User registration
router.post('/login', userController.loginUser);        // User login

// Protected Routes (require authentication)
router.get('/profile', authMiddleware, userController.getUserProfile);   // Get user profile
router.put('/profile', authMiddleware, userController.updateUserProfile); // Update user profile
router.delete('/profile', authMiddleware, userController.deleteUserAccount); // Delete user account

module.exports = router;
