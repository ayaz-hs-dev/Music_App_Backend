const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const musicRoutes = require("./routes/musicRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// Routes
app.use("/users", userRoutes);
app.use("/songs", musicRoutes);
app.use("/comments", commentRoutes);

const PORT = 3000;
const server = app.listen(PORT,"0.0.0.0", () => console.log(`Server running at http://localhost:${PORT}`));

// WebSocket (Socket.io) setup
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*", // allow all origins or specify your Flutter app origin
    methods: ["GET", "POST"]
  }
});

// Listen for client connections
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Listen for new comment events from clients
  socket.on("newComment", (comment) => {
    console.log("New comment received:", comment);
    // Broadcast to all clients except sender
    socket.broadcast.emit("receiveComment", comment);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

module.exports = io;
