const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken')

exports.signToken = (user) => {
  return jwt.sign({
    _id: user._id,
    email: user.email,
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
  },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d'
    }
  )
}

const INVALID_LOGIN = 40001

exports.verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET || 'somethingsecret', (err, decode) => {
      if (err) {
        res.status(401).json({ error: INVALID_LOGIN, message: 'Invalid Token' });
      } else {
        res.user = decode;
        next();
      }
    })
  } else {
    res.status(401).json({ message: 'No Token' })
  }

  // if (!token) {
  //   return res.status(403).send("A token is required for authentication");
  // }
  // try {
  //   const decoded = jwt.verify(token, config.TOKEN_KEY);
  //   req.user = decoded;
  // } catch (err) {
  //   return res.status(401).send("Invalid Token");
  // }
};