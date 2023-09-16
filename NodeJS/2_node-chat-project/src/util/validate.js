const User = require('../app/models/User');
const joi = require('joi');
const { CATCH_ERROR, VALIDATE_ERROR, EMAIL_EXISTS } = require('../const/error');
const bcrypt = require('bcrypt');

const validateSignUp = (schemas) => {
  return (req, res, next) => {
    delete req.body['_id'];

    const validatorResult = schemas.validate(req.body);

    if (validatorResult.error) {
      res.status(400).send({
        message: VALIDATE_ERROR,
      });
    } else {
      User.findOne({ email: req.body.email })
        .then((user) => {
          if (user) {
            res.status(400).send({ message: EMAIL_EXISTS });
          } else {
            req.body.createdAt = new Date().getTime();
            req.body.updatedAt = new Date().getTime();
            // hash password
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              req.body.password = hash;
              next();
            });
          }
        })
        .catch(() => {
          res.status(400).send({ message: CATCH_ERROR, position: 'validate' });
        });
    }
  };
};

const schemas = {
  authSignUp: joi.object().keys({
    email: joi.string().required(),
    password: joi.string().min(5).required(),
    name: joi.string().min(5).required(),
    phone: joi.string().required(),
    role: joi.string().allow(null, ''),
    avatar: joi.string().allow(null, ''),
    createdAt: joi.number().allow(null, ''),
    updatedAt: joi.number().allow(null, ''),
  }),
};

module.exports = {
  validateSignUp,
  schemas,
};
