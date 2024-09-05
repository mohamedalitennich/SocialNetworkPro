const mongoose = require('mongoose');

// Define the schema for a Group
const GroupSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  membres: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur' // Reference to the Utilisateur schema
  }],
  publications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publication' // Reference to the Publication schema
  }]
});

// Create the model from the schema
const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
