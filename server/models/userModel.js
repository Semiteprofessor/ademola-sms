const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_id: String,
    name: String,
    email: String,
    password: String,
    photo: String,
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
