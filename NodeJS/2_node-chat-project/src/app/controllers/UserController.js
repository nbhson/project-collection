const { CATCH_ERROR } = require('../../const/error');
const User = require('../models/User');

class UserController {
  // [GET] /users
  allUserOnline(req, res, next) {
    User.find({ online: true })
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

  loginStatus(req, res, next) {
    User.findByIdAndUpdate(req.body._id, req.body)
      .then(() => res.json({ message: 'Successfully' }))
      .catch((error) => res.status(400).send({ message: CATCH_ERROR }));
  }
}

module.exports = new UserController();
