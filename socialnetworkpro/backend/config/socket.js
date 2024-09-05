
const { Server } = require('socket.io');

const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", 
      methods: ["GET", "POST"],
    },
  });

  io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);

   
    socket.on('sendMessage', (data) => {
      console.log(`Message received from ${socket.id}:`, data);
      io.emit('receiveMessage', data);
    });

  
    socket.on('typing', (data) => {
      
      socket.broadcast.emit('typing', data);
    });

   
    socket.on('joinRoom', (room) => {
      socket.join(room);
      console.log(`User ${socket.id} joined room: ${room}`);
    });

  
    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });

  
  return io;
};

module.exports = initSocket;
