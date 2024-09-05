const Message = require('../models/Message');
const socket = require('../socket'); // Importing socket instance

// Function to handle new message creation
const sendMessage = async (senderId, recipientId, content) => {
  try {
    // Create a new message document
    const message = new Message({
      sender: senderId,
      recipient: recipientId,
      content,
    });

    await message.save();

    // Emit the message to the recipient using WebSocket
    socket.to(recipientId).emit('newMessage', message);

    return message;
  } catch (error) {
    console.error(`Failed to send message: ${error.message}`);
    throw error;
  }
};

// Function to fetch chat messages between two users
const getChatMessages = async (userId1, userId2) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: userId1, recipient: userId2 },
        { sender: userId2, recipient: userId1 },
      ],
    }).sort({ createdAt: 1 }); // Sort messages by creation time

    return messages;
  } catch (error) {
    console.error(`Failed to fetch chat messages: ${error.message}`);
    throw error;
  }
};

// Function to handle user connection
const handleUserConnection = (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for incoming messages
  socket.on('sendMessage', async (data) => {
    const { senderId, recipientId, content } = data;
    try {
      const message = await sendMessage(senderId, recipientId, content);
      socket.to(recipientId).emit('newMessage', message);
    } catch (error) {
      console.error(`Failed to send message: ${error.message}`);
    }
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
};

module.exports = {
  sendMessage,
  getChatMessages,
  handleUserConnection,
};
