const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    chat_id: String,
    sender: String,
    receiver: String,
    messages: [
      {
        _id: String,
        text: String,
        createdAt: String,
        user: {
          _id: String,
          name: String,
          photo: String,
        },
        image: String,
      },
    ],
  },
  { timestamps: true },
  { strict: false }
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
