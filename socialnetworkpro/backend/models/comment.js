const mongoose = require('mongoose');

// Define the schema for a Comment
const CommentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  contenu: {
    type: String,
    required: true
  },
  dateCommentaire: {
    type: Date,
    default: Date.now
  },
  auteur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur', // Reference to the Utilisateur schema
    required: true
  }
});

// Create the model from the schema
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
