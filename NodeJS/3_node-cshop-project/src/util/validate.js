const User = require('../app/models/User');
const joi = require('joi');
const { CATCH_ERROR, VALIDATE_ERROR } = require('../const/error');
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
      User.findOne({ userName: req.body.userName })
        .then((user) => {
          if (user) {
            res.status(400).send({ message: 'Tên tài khoản đã tồn tại!' });
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

const addCategory = (schemas) => {
  return (req, res, next) => {
    delete req.body['_id'];
    delete req.body['displayCreatedAt'];
    delete req.body['couterProduct'];

    const validatorResult = schemas.validate(req.body);

    if (validatorResult.error) {
      res.status(400).send({
        message: VALIDATE_ERROR,
      });
    } else {
      req.body.createdAt = new Date().getTime();
      req.body.updatedAt = new Date().getTime();
      next();
    }
  };
};

const updateCategory = (schemas) => {
  return (req, res, next) => {
    delete req.body['displayCreatedAt'];
    delete req.body['couterProduct'];

    const validatorResult = schemas.validate(req.body);

    if (validatorResult.error) {
      res.status(400).send({
        message: VALIDATE_ERROR,
      });
    } else {
      req.body.updatedAt = new Date().getTime();
      next();
    }
  };
};

const deleteCategory = (schemas) => {
  return (req, res, next) => {
    const validatorResult = schemas.validate(req.params);
    if (validatorResult.error) {
      res.status(400).send({
        message: VALIDATE_ERROR,
      });
    } else {
      next();
    }
  };
};

const addProduct = (schemas) => {
  return (req, res, next) => {
    delete req.body['_id'];
    delete req.body['displayCreatedAt'];
    delete req.body['categoryName'];
    delete req.body['priceDisplay'];

    const validatorResult = schemas.validate(req.body);

    if (validatorResult.error) {
      res.status(400).send({
        message: VALIDATE_ERROR,
      });
    } else {
      req.body.createdAt = new Date().getTime();
      req.body.updatedAt = new Date().getTime();
      next();
    }
  };
};

const updateProduct = (schemas) => {
  return (req, res, next) => {
    delete req.body['displayCreatedAt'];
    delete req.body['categoryName'];
    delete req.body['priceDisplay'];

    const validatorResult = schemas.validate(req.body);

    if (validatorResult.error) {
      res.status(400).send({
        message: VALIDATE_ERROR,
      });
    } else {
      req.body.updatedAt = new Date().getTime();
      next();
    }
  };
};

const deleteProduct = (schemas) => {
  return (req, res, next) => {
    const validatorResult = schemas.validate(req.params);
    if (validatorResult.error) {
      res.status(400).send({
        message: VALIDATE_ERROR,
      });
    } else {
      next();
    }
  };
};

const schemas = {
  authSignUp: joi.object().keys({
    userName: joi.string().min(5).required(),
    password: joi.string().min(5).required(),
    name: joi.string().min(5).required(),
    role: joi.string().allow(null, ''),
    avatar: joi.string().allow(null, ''),
    createdAt: joi.number().allow(null, ''),
    updatedAt: joi.number().allow(null, ''),
  }),
  // Category
  addCategory: joi.object().keys({
    name: joi.string().min(5).required(),
    image: joi.string().required(),
    createdAt: joi.number().allow(null, ''),
    updatedAt: joi.number().allow(null, ''),
  }),
  updateCategory: joi.object().keys({
    _id: joi.string().required(),
    name: joi.string().min(5).required(),
    image: joi.string().allow(null, ''),
    createdAt: joi.number().allow(null, ''),
    updatedAt: joi.number().allow(null, ''),
  }),
  deleteCategory: joi.object().keys({
    _id: joi.string().required(),
  }),
  // Product
  addProduct: joi.object().keys({
    name: joi.string().min(5).required(),
    image: joi.string().required(),
    price: joi.number().required(),
    description: joi.string().required(),
    categoryId: joi.string().required(),
    createdAt: joi.number().allow(null, ''),
    updatedAt: joi.number().allow(null, ''),
  }),
  updateProduct: joi.object().keys({
    _id: joi.string().required(),
    name: joi.string().min(5).required(),
    image: joi.string().allow(null, ''),
    price: joi.number().required(),
    description: joi.string().required(),
    categoryId: joi.string().required(),
    createdAt: joi.number().allow(null, ''),
    updatedAt: joi.number().allow(null, ''),
  }),
  deleteProduct: joi.object().keys({
    _id: joi.string().required(),
  }),
};

module.exports = {
  validateSignUp,
  addCategory,
  updateCategory,
  deleteCategory,
  addProduct,
  updateProduct,
  deleteProduct,
  schemas,
};
