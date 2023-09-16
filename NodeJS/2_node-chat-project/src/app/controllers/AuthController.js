const User = require('../models/User');

const { CATCH_ERROR } = require('../../const/error');
const { encodeToken } = require('../../util/jwt');
const { SUCCESS } = require('../../const/success');

class AuthController {
  // [POST] /auth/register
  register(req, res, next) {
    const user = new User(req.body);

    user
      .save()
      .then(() => {
        return res.json({
          email: req.body.email,
        });
      })
      .catch((error) => {
        res.status(400).send({ message: CATCH_ERROR });
      });
  }

  // [POST] /auth/login
  login(req, res, next) {
    const { email, password } = req.body;
    const token = encodeToken(email);
    res.setHeader('Authorization', token);

    return res.json({
      jwt: token,
      exp: 259200,
    });
  }

  // [POST] /auth/logout
  logout(req, res, next) {
    return res.json({
      message: SUCCESS,
    });
  }
}

module.exports = new AuthController();
