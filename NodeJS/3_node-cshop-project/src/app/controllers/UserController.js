const { CATCH_ERROR } = require('../../const/error');
const User = require('../models/User');

class UserController {
  // [GET] /users
  allUser(req, res, next) {
    User.find({})
      .sort({ createdAt: -1 })
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        res.status(400).send({ message: CATCH_ERROR });
      });
  }
  // [POST] /user/info
  userInfo(req, res, next) {
    req.user
      .then((user) => {
        return res.json(user);
      })
      .catch((err) => {
        res.status(400).send({ message: CATCH_ERROR });
      });
  }
}

module.exports = new UserController();
