require("dotenv").config();

// Libraries
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");

// DB
const connectDB = require("./config/db");

connectDB();

//Initialize the server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Model
const User = require("./models/userModel");

// Routes
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/chats", chatRoutes);

const PORT = process.env.PORT || 8080;

var clients = [];

io.on("connection", (socket) => {
  console.log("New User Connected");
  socket.on("storeClientInfo", function (data) {
    console.log(data.customId + " Connected");
    var clientInfo = new Object();
    clientInfo.customId = data.customId;
    clientInfo.clientId = socket.id;
    clients.push(clientInfo);
    const res = User.updateOne({ id: data.customId }, { isActive: true });
    res.exec().then(() => {
      console.log("Activated " + data.customId);
      socket.broadcast.emit("update", "Updated");
      console.log("emmited");
    });
  });

  socket.on("disconnect", function (data) {
    for (var i = 0, len = clients.length; i < len; ++i) {
      var c = clients[i];
      if (c.clientId == socket.id) {
        clients.splice(i, 1);
        console.log(c.customId + " Disconnected");
        const res = User.updateOne({ id: c.customId }, { isActive: false });
        res.exec().then((data) => {
          console.log("Deactivated " + c.customId);
          socket.broadcast.emit("update", "Updated");
        });
        break;
      }
    }
  });
});

//Messages Socket
const chatSocket = io.of("/chatsocket");
chatSocket.on("connection", function (socket) {
  socket.on("newMessage", (data) => {
    socket.broadcast.emit("incommingMessage", "reload");
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
