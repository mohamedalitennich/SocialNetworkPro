const mongoose = require('mongoose');

// Define the schema for a Post
const PostSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  contenu: {
    type: String,
    required: true
  },
  datePublication: {
    type: Date,
    default: Date.now
  },
  auteur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur', // Reference to the Utilisateur schema
    required: true
  },
  commentaires: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Commentaire' // Reference to the Commentaire schema
  }],
  likes: {
    type: Number,
    default: 0
  }
});

// Create the model from the schema
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
