const mongoose = require("mongoose");

const broadcastSchema = new mongoose.Schema(
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
  { timestamps: true },
  { strict: false }
);

const Broadcast = mongoose.model("Broadcast", broadcastSchema);

module.exports = Broadcast;
