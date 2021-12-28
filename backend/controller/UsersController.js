const expressAsyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { signToken } = require('../helpers/authJwt');
const { isValidEmail } = require('../helpers/validEmail');

exports.getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).send({ data: users, message: "Successfully get all users", status: 'success' })
})

exports.signupUser = expressAsyncHandler(async (req, res) => {
  const { email, username, firstname, lastname, password, profileImage } = req.body;

  if (!isValidEmail(email)) {
    throw Error('Email is invalid')
  }

  const user = await User.create({
    email: email,
    username: username,
    firstname: firstname,
    lastname: lastname,
    profileImage: profileImage,
    password: bcrypt.hashSync(password)
  })
  res.status(200).send({ message: 'Successfully Created User', status: 'success', data: user })
})

exports.authUser = expressAsyncHandler(async (req, res) => {
  const payload = req.body

  const user = await User.findOne({ email: payload.email });
  console.log(user)
  if (user && bcrypt.compareSync(payload.password, user.password)) {
    const token = signToken(user);
    res.status(200).send({
      message: 'Successfully signin', status: 'success', data: {
        token,
        _id: user._id,
        email: user.email,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        profileImage: user.profileImage,
        role: user.role
      }
    })
  } else if (!user) {
    res.send({ message: 'User is not exist', status: 'error' })
  } else {
    res.send({ message: 'Invalid user or password', status: 'error' })
  }
})