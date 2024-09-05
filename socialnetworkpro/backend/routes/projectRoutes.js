const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected Routes
router.post('/', authMiddleware, projectController.createProject);  // Create a new project
router.get('/', authMiddleware, projectController.getAllProjects);  // Get all projects
router.get('/:id', authMiddleware, projectController.getProjectById);  // Get a project by ID
router.put('/:id', authMiddleware, projectController.updateProject);  // Update a project
router.delete('/:id', authMiddleware, projectController.deleteProject);  // Delete a project

module.exports = router;
