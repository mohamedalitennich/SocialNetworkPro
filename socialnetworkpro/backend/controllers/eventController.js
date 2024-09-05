const Event = require('../models/event'); // Import Event model

// Create a new event
const createEvent = async (req, res) => {
  const { title, description, date } = req.body;

  try {
    const event = new Event({
      title,
      description,
      date,
      createdBy: req.user.id,
    });

    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
};
