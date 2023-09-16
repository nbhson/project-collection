const { CATCH_ERROR } = require('../../const/error');
const Message = require('../models/Message');

class MessageController {
  // [GET] /message/all
  allMessage(req, res, next) {
    Message.find({})
      .sort({ createdAt: -1 })
      .then((message) => {
        res.json(message);
      })
      .catch((err) => {
        res.status(400).send({ message: CATCH_ERROR });
      });
  }
}

module.exports = new MessageController();
