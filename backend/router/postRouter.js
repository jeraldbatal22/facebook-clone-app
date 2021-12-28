const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getImage } = require('../controller/PostsController');
const { verifyToken } = require('../helpers/authJwt');
const { uploadSingleImage } = require('./uploadRouter');

router.post('/create', verifyToken, uploadSingleImage, createPost);
router.get('/', verifyToken, getAllPosts);
router.get('/image', getImage);

module.exports = router;