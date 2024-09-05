const mongoose = require('mongoose');

// Define the schema for a Project
const ProjectSchema = new mongoose.Schema({
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
  dateDébut: {
    type: Date,
    required: true
  },
  dateFin: {
    type: Date,
    required: true
  },
  tâches: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tâche' // Reference to the Tâche schema
  }],
  membres: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur' // Reference to the Utilisateur schema
  }]
});

// Create the model from the schema
const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
