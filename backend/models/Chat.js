const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const chatSchema = new Schema(
  {
    userSender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Required userSender']
    },
    userReceiver: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Required userReceiver']
    },
    image: {
      type: String
    },
    message: {
      type: String,
      required: [true, 'Please enter message']
    },
  },
  {
    timestamps: true
  }
);

const Chat = model('Chat', chatSchema);

module.exports = Chat;