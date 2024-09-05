const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected Routes
router.post('/', authMiddleware, messageController.sendMessage);  // Send a message
router.get('/:conversationId', authMiddleware, messageController.getMessagesForConversation);  // Get messages for a specific conversation

module.exports = router;
