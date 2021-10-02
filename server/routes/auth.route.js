const express = require('express');
const router = express.Router();
const user = require('../controllers/auth.controller');
const {
  userSignupValidator,
  userSigninValidator,
} = require('../validation/auth');
const { runValidation } = require('../validation/runValidate');

router.post(
  '/pre-activate',
  userSignupValidator,
  runValidation,
  user.preSignup
);
router.post('/signup', user.SignUp);

router.post('/signin', userSigninValidator, runValidation, user.Login)

module.exports = router;
