require("dotenv").config();

const mongoose = require("mongoose");

const HOST = process.env.MONGO_DB_HOST;
const PORT = process.env.MONGO_DB_PORT;
const DATABASE = process.env.MONGO_DB_DATABASE;

const mongo_uri = `${HOST}:${PORT}/${DATABASE}`;

const connectDB = async (req, res, next) => {
  try {
    await mongoose.connect(mongo_uri);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.log("MongoDB connection failed" + err);
  }
};

module.exports = connectDB;
