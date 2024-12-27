const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Create Express app
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the "public" folder
app.use(express.static('public'));

// WebSocket connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming chat messages
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast message to all connected clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Use dynamic port for deployment
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
