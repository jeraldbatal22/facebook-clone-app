const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Required user']
    },
    image: {
      type: String
    },
    description: {
      type: String,
      required: [true, 'Please enter Description']
    },
    shares: [{
      type: Schema.Types.ObjectId,
      ref: 'Shares'
    }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

postSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: "post"
});

const Post = model('Post', postSchema);

module.exports = Post;