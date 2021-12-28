const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  // _id: Schema.type.objectId,
  email: { type: String, required: [true, 'Email is required'], unique: true },
  username: { type: String, required: [true, 'Username is required'], unique: true },
  firstname: { type: String, required: [true, 'Firstname is required'] },
  lastname: { type: String, required: [true, 'Lastname is required'] },
  password: { type: String, required: [true, 'Password is required'] },
  status: { type: Number, required: true, default: 0 },
  profileImage: { type: String },
},
  {
    timestamps: true
  });

const User = model('User', userSchema)

module.exports = User