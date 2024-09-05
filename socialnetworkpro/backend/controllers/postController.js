const Post = require('../models/post'); // Import Post model

// Create a new post
const createPost = async (req, res) => {
  const { content } = req.body;

  try {
    const post = new Post({
      user: req.user.id,
      content,
    });

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all posts for the news feed
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); // Sort by most recent
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Like a post
const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    post.likes.push(req.user.id); // Add user ID to likes array
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  likePost,
};
