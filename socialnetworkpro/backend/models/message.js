const mongoose = require('mongoose');

// Define the schema for a Message
const MessageSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  contenu: {
    type: String,
    required: true
  },
  dateEnvoi: {
    type: Date,
    default: Date.now
  },
  émetteur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur', // Reference to the Utilisateur schema for the sender
    required: true
  },
  destinataire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur', // Reference to the Utilisateur schema for the recipient
    required: true
  }
});

// Create the model from the schema
const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
