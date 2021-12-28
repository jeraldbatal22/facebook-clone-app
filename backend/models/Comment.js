const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Required user']
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'Required post']
    },
    image: {
      type: String
    },
    message: {
      type: String,
      required: [true, 'Please enter comment']
    },
  },
  {
    timestamps: true
  }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;