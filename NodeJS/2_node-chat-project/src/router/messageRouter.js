const express = require('express');
const messageController = require('../app/controllers/MessageController');
const passport = require('passport');
const passportConfig = require('../config/middleware/passport');

const router = express.Router();

router.get(
  '/all',
  passport.authenticate('jwt', { session: false }),
  messageController.allMessage,
);

module.exports = router;
