const expressAsyncHandler = require('express-async-handler')
const Comment = require('../models/Comment');
// const Post = require('../models/Post');

exports.getAllComments = async (req, res) => {
  // const { postId } = req.params;
  // const post = await Post.findById(postId)
  const comment = await Comment.find()
    .populate('user', 'firstname lastname username email profileImage')
    .sort({ createdAt: 'desc' });
  res.status(200).send({ data: comment, message: "Successfully get all comments", status: 'success' })
}

exports.createComment = expressAsyncHandler(async (req, res) => {
  const payload = req.body;
  const postId = req.params.postId;

  const result = await Comment.create({
    message: payload.message,
    user: payload.user,
    post: postId
  });

  const user = await Comment
    .findOne({ _id: result._id.toString() })
    .populate('user', 'firstname lastname username email profileImage')
  res.status(200).send({
    message: 'Successfully created comment',
    status: 'success',
    data: user
  });
})
