const express = require('express');
const router = express.Router();
const { createChatUser, getAllChats, getAllChatsSpecificUser } = require('../controller/ChatController');
const { verifyToken } = require('../helpers/authJwt');

router.get('/', verifyToken, getAllChats);
router.get('/:userId', verifyToken, getAllChatsSpecificUser);
router.post('/create', verifyToken, createChatUser);

module.exports = router;