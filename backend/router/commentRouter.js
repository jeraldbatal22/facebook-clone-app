const express = require('express');
const router = express.Router();
const { createComment, getAllComments } = require('../controller/CommentsController');
const { verifyToken } = require('../helpers/authJwt');

router.post('/create/:postId', verifyToken, createComment);
router.get('/', verifyToken, getAllComments);

module.exports = router;