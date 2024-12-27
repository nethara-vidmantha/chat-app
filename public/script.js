const socket = io(); // Establish WebSocket connection

// Get DOM elements
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Handle incoming chat messages
socket.on('chat message', (msg) => {
  const messageElement = document.createElement('div');
  messageElement.textContent = msg;
  messagesDiv.appendChild(messageElement);
});

// Send a chat message
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    socket.emit('chat message', message); // Send message to server
    messageInput.value = ''; // Clear input
  }
});
