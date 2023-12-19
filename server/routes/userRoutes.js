const router = require("express").Router();

const { login, register } = require("../controllers/userController");

// Register user
router.post("/register", register);

// Login user
router.post("/login", login);

module.exports = router;
