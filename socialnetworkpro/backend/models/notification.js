const mongoose = require('mongoose');

// Define the schema for a Notification
const NotificationSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true
  },
  contenu: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  lu: {
    type: Boolean,
    default: false
  },
  destinataire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur', // Reference to the Utilisateur schema
    required: true
  }
});

// Create the model from the schema
const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification;
