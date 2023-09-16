const express = require('express');
const ProductController = require('../app/controllers/ProductController');
const passport = require('passport');
const passportConfig = require('../config/middleware/passport');
const {
  schemas,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../util/validate');

const router = express.Router();

router.get(
  '/all',
  // passport.authenticate('jwt', { session: false }),
  ProductController.all,
);

router.post(
  '/info',
  // passport.authenticate('jwt', { session: false }),
  ProductController.productInfo,
);

router.post(
  '/byCategory',
  // passport.authenticate('jwt', { session: false }),
  ProductController.byCategory,
);

router.post(
  '/add',
  addProduct(schemas.addProduct),
  passport.authenticate('jwt', { session: false }),
  ProductController.add,
);

router.put(
  '/update',
  updateProduct(schemas.updateProduct),
  passport.authenticate('jwt', { session: false }),
  ProductController.update,
);

router.delete(
  '/delete/:_id',
  deleteProduct(schemas.deleteProduct),
  passport.authenticate('jwt', { session: false }),
  ProductController.delete,
);

module.exports = router;
