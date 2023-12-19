const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User.find({ email: email, password: password });
    if (findUser.length === 0) {
      throw new Error("Invalid email or password");
    }

    res.status(200).json({
      status: 200,
      message: "Login successful",
      data: findUser,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Login failed",
    });
  }
};

const register = async (req, res) => {
  const { user_id, name, email, password } = req.body;
  try {
    const findIfExists = await User.find({ email: email });
    if (findIfExists.length > 0) {
      throw new Error("User already exists");
    }

    const userID = uuidv4();
    const user = await new User({
      user_id: userID,
      name,
      email,
      password,
    });

    const newUser = await user.save();

    res.status(200).json({
      status: 200,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "User registration failed",
    });
  }
};

module.exports = { login, register };
