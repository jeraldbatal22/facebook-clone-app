const { isValidEmail } = require("./../helpers/validEmail");

exports.checkIsValidEmail = async (req, res, next) => {
  const { email } = req.body;
  const errors = []

  if (!isValidEmail(email)) {
    errors.push('Email is invalid')
  }

  if (errors.length > 0) {
    return res.status(400).json({ status: 'error', errors: errors, message: 'Bad request' })
  };

  next();
}