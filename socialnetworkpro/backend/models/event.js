const mongoose = require('mongoose');

// Define the schema for an Event
const EventSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  nom: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  lieu: {
    type: String,
    required: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur' // Reference to the Utilisateur schema
  }]
});

// Create the model from the schema
const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
