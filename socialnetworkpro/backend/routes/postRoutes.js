const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected Routes
router.post('/', authMiddleware, postController.createPost);  // Create a new post
router.get('/', authMiddleware, postController.getAllPosts);  // Get all posts
router.get('/:id', authMiddleware, postController.getPostById);  // Get a single post by ID
router.put('/:id', authMiddleware, postController.updatePost);  // Update a post
router.delete('/:id', authMiddleware, postController.deletePost);  // Delete a post

module.exports = router;
