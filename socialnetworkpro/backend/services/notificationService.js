const User = require('../models/user');
const Notification = require('../models/notification'); 
const socket = require('../socket'); // Importing socket instance

// Send a notification to a user
const sendNotification = async (userId, message) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Create a new notification document
    const notification = new Notification({
      user: userId,
      message,
    });

    await notification.save();

    // Emit the notification to the user via WebSocket
    socket.to(userId).emit('notification', notification);

    return notification;
  } catch (error) {
    console.error(`Failed to send notification: ${error.message}`);
    throw error;
  }
};

// Get all notifications for a user
const getUserNotifications = async (userId) => {
  try {
    const notifications = await Notification.find({ user: userId }).sort({ createdAt: -1 });
    return notifications;
  } catch (error) {
    console.error(`Failed to get notifications: ${error.message}`);
    throw error;
  }
};

// Mark a notification as read
const markNotificationAsRead = async (notificationId) => {
  try {
    const notification = await Notification.findById(notificationId);
    if (!notification) {
      throw new Error('Notification not found');
    }

    notification.read = true;
    await notification.save();

    return notification;
  } catch (error) {
    console.error(`Failed to mark notification as read: ${error.message}`);
    throw error;
  }
};

module.exports = {
  sendNotification,
  getUserNotifications,
  markNotificationAsRead,
};
