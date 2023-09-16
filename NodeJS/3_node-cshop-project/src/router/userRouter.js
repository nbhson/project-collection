const express = require('express');
const userController = require('../app/controllers/UserController');
const passport = require('passport');
const passportConfig = require('../config/middleware/passport');

const router = express.Router();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  userController.allUser,
);

router.get(
  '/info',
  passport.authenticate('jwt', { session: false }),
  userController.userInfo,
);

module.exports = router;
