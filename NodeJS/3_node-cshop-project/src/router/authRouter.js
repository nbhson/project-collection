const express = require('express');
const authController = require('../app/controllers/AuthController');
const { validateSignUp, schemas } = require('../util/validate');
const passport = require('passport');
const passportConfig = require('../config/middleware/passport');

const router = express.Router();

router.post(
  '/register',
  validateSignUp(schemas.authSignUp),
  authController.register,
);
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  authController.login,
);
router.post(
  '/logout',
  passport.authenticate('jwt', { session: false }),
  authController.logout,
);
router.get(
  '/secret',
  passport.authenticate('jwt', { session: false }),
  authController.secret,
);

module.exports = router;
