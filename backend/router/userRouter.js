const express = require('express');
const { signupUser, getAllUsers, authUser } = require('../controller/UsersController');
const { checkIsValidEmail } = require('./../middleware/userValidation')
const router = express.Router();

router.post('/signup', signupUser);
router.post('/signin', authUser);
router.get('/', getAllUsers);

module.exports = router;