const mongoose = require('mongoose');

// Define the schema for a User
const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  nom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  motDePasse: {
    type: String,
    required: true
  },
  poste: {
    type: String,
    required: true
  },
  compétences: [{
    type: String
  }],
  historiqueProjets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Projet' // Reference to the Projet schema
  }],
  photoProfil: {
    type: String
  },
  résuméCompétences: {
    type: String
  }
});

// Create the model from the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;
