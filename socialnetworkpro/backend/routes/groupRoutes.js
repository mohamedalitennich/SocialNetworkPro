const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected Routes
router.post('/', authMiddleware, groupController.createGroup);  // Create a new group
router.get('/', authMiddleware, groupController.getAllGroups);  // Get all groups
router.get('/:id', authMiddleware, groupController.getGroupById);  // Get group by ID
router.put('/:id', authMiddleware, groupController.updateGroup);  // Update a group
router.delete('/:id', authMiddleware, groupController.deleteGroup);  // Delete a group

module.exports = router;
