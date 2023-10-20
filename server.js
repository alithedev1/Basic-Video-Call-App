// Import necessary libraries and modules
const express = require("express"); // Express is used for creating a web server
const http = require("http"); // HTTP module is used to create an HTTP server
const socketIO = require("socket.io"); // Socket.IO enables real-time communication

// Define the port number for the server, using the environment variable if available, or defaulting to 3000
const port = process.env.PORT || 3000;

// Create an instance of the Express application
const app = express();

// Create an HTTP server using the Express application
const server = http.createServer(app);

// Create a Socket.IO server and attach it to the HTTP server
const io = socketIO(server);

// Serve static files from the "public" directory
app.use(express.static("public"));

// Listen for new socket connections
io.on("connection", (socket) => {
  // When a new user connects, this event is triggered
  socket.on("new-user", (userId) => {
    // Broadcast a message to all connected clients except the sender
    socket.broadcast.emit("user-connected", userId);
  });
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
