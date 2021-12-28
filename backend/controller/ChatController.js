const Chat = require('../models/Chat');
const expressAsyncHandler = require('express-async-handler')


exports.getAllChatsSpecificUser = async (req, res) => {
  const chats = await Chat.find({ userSender: req.params.userId })
    .populate('userSender', 'firstname lastname username email profileImage')
    .populate('userReceiver', 'firstname lastname username email profileImage')
    .sort({ createdAt: 'desc' });
  res.status(200).send({ data: chats, message: "Successfully get all chats", status: 'success' })
}

exports.getAllChats = async (req, res) => {
  const chats = await Chat.find()
    .populate('userSender', 'firstname lastname username email profileImage')
    .populate('userReceiver', 'firstname lastname username email profileImage')
    .sort({ createdAt: 'desc' });
  res.status(200).send({ data: chats, message: "Successfully get all chats", status: 'success' })
}

exports.createChatUser = expressAsyncHandler(async (req, res) => {
  const payload = req.body

  const result = await Chat.create(payload)

  res.status(200).send({
    message: 'Successfully send a message to a friend',
    status: 'success',
    data: result
  });
})