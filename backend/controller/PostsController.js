const expressAsyncHandler = require('express-async-handler')
const Post = require('../models/Post');
const fs = require('fs');
const path = require('path');

exports.getAllPosts = async (req, res) => {
  const posts = await Post
    .find()
    .populate('user', 'firstname lastname username email profileImage')
    .populate('comments')
    .sort({ createdAt: 'desc' });

  res.status(200).json({ data: posts, message: "Successfully get all posts", status: 'success' })
}

exports.createPost = expressAsyncHandler(async (req, res) => {
  const payload = req.body;
  const img = req.file;

  const result = await Post
    .create({
      description: payload.description,
      user: payload.user,
      image: img ? img.filename : "",
    })

  const post = await Post
    .findOne({ _id: result._id.toString() })
    .populate('comments')
    .populate('user', 'firstname lastname username email profileImage')

  res.status(200).json({
    message: 'Successfully created post',
    status: 'success',
    data: post
  });
})

exports.getImage = async (req, res) => {
  const filename = req.query?.filename ? req.query.filename : ''
  const uploadDir = __dirname.replace('controller', 'uploads');
  // const readFile = fs.readFileSync(path.join(uploadDir, filename))
  res.download(path.join(uploadDir, filename));
}













  // if (img) {
  //   console.log(img, 'img')
  //   console.log(dataUri(req), 'sadsadsad')
  //   // const file = dataUri(req).content;
  //   // console.log(file, 'sadsadsad')
  //   // console.log(dataUri)
  //   // return uploader.upload(file).then((result) => {
  //   //   const image = result.url;
  //   //   return res.status(200).send({
  //   //     messge: 'Your image has been uploded successfully to cloudinary',
  //   //     data: {
  //   //       image
  //   //     }
  //   //   })
  //   // }).catch((err) => res.status(400).send({
  //   //   messge: 'someting went wrong while processing your request',
  //   //   data: {
  //   //     err
  //   //   }
  //   // }))
  // }