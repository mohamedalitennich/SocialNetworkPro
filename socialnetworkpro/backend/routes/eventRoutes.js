const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected Routes
router.post('/', authMiddleware, eventController.createEvent);  // Create a new event
router.get('/', authMiddleware, eventController.getAllEvents);  // Get all events
router.get('/:id', authMiddleware, eventController.getEventById);  // Get an event by ID
router.put('/:id', authMiddleware, eventController.updateEvent);  // Update an event
router.delete('/:id', authMiddleware, eventController.deleteEvent);  // Delete an event

module.exports = router;
