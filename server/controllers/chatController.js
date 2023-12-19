const Chat = require("../models/chatModel");

const newChat = async (req, res) => {
  const { receiver, sender, messages } = req.body;
  try {
    const query = Chat.findOne({
      $or: [
        { receiver: receiver, sender: sender },
        { receiver: sender, sender: receiver },
      ],
    });
    query.exec().then((data) => {
      if (data === null) {
        const chat = new Chat({
          chat_id: uuidv4(),
          sender: sender,
          receiver: receiver,
          messages: messages,
        });
        const saveChat = chat.save();
        res.status(200).json({
          status: 200,
          message: "Chat created successfully",
          data: saveChat,
        });
      } else {
        const updateChat = Chat.updateOne(
          {
            $or: [
              { receiver: receiver, sender: sender },
              { receiver: sender, sender: receiver },
            ],
          },
          { $set: { message: messages } }
        );
        updateChat.exec().then((data) => {
          res
            .status(200)
            .json({
              status: 200,
              message: "Chat updated successfully",
              data,
            })
            .catch((error) => {
              res.status(500).json({
                status: 500,
                message: error.message,
              });
            });
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const getChat = (req, res) => {
  try {
    const { receiver, sender } = req.body;
    const query = Chat.findOne({
      $or: [
        { receiver: receiver, sender: sender },
        { receiver: sender, sender: receiver },
      ],
    });
    query.exec().then((data) => {
      res.status(200).json({
        status: 200,
        message: "Chat fetched successfully",
        data,
      });
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

module.exports = {
  newChat,
  getChat,
};
