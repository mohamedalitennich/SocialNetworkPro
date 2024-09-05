const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
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
  statut: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed', 'On Hold'], // Possible statuses for the task
    default: 'Not Started'
  },
  responsable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur' // Reference to the Utilisateur schema
  },
  projet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Projet' // Reference to the Projet schema
  }
});

// Create the model from the schema
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
