const express = require('express');
const router = express.Router();
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const commentRouter = require('./commentRouter');
const chatRouter = require('./chatRouter');

router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.use('/users', userRouter);
router.use('/chats', chatRouter);

module.exports = router;