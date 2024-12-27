// Connect to the server
const socket = io();

// Select DOM elements
const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

// Listen for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    if (input.value) {
        // Send message to server
        socket.emit('chat message', input.value);
        input.value = ''; // Clear the input field
    }
});

// Listen for incoming messages
socket.on('chat message', (msg) => {
    const item = document.createElement('div');
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight; // Auto-scroll
});
