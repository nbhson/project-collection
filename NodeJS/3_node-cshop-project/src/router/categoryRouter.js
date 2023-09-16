const express = require('express');
const CategoryController = require('../app/controllers/CategoryController');
const passport = require('passport');
const passportConfig = require('../config/middleware/passport');
const {
  schemas,
  addCategory,
  updateCategory,
  deleteCategory,
} = require('../util/validate');

const router = express.Router();

router.get(
  '/all',
  // passport.authenticate('jwt', { session: false }),
  CategoryController.all,
);

router.post(
  '/add',
  addCategory(schemas.addCategory),
  passport.authenticate('jwt', { session: false }),
  CategoryController.add,
);

router.put(
  '/update',
  updateCategory(schemas.updateCategory),
  passport.authenticate('jwt', { session: false }),
  CategoryController.update,
);

router.delete(
  '/delete/:_id',
  deleteCategory(schemas.deleteCategory),
  passport.authenticate('jwt', { session: false }),
  CategoryController.delete,
);

module.exports = router;
