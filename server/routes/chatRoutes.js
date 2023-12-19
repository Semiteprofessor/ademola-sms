const router = require("express").Router();
const { newChat, getChat } = require("../controllers/chatController");

// New chat
router.post("/chats", getChat);

// Get all chat
router.get("/chats/:sender/:reciever", newChat);

module.exports = router;
