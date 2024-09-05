const Message = require('../models/Message'); // Import Message model
const User = require('../models/user'); // Import User model

// Send a new message
const sendMessage = async (req, res) => {
  const { content, recipientId } = req.body;

  try {
    const message = new Message({
      sender: req.user.id,
      recipient: recipientId,
      content,
    });

    await message.save();
    res.json(message);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get messages between two users
const getMessages = async (req, res) => {
  const { userId1, userId2 } = req.params;

  try {
    const messages = await Message.find({
      $or: [
        { sender: userId1, recipient: userId2 },
        { sender: userId2, recipient: userId1 },
      ],
    }).sort({ createdAt: 1 }); // Sort messages by creation date

    res.json(messages);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  sendMessage,
  getMessages,
};
