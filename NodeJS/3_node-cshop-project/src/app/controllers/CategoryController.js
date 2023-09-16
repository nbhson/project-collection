const { CATCH_ERROR } = require('../../const/error');
const { SUCCESS } = require('../../const/success');
const Category = require('../models/Category');

class CategoryController {
  // [GET] /category/all
  all(req, res, next) {
    Category.find({})
      .sort({ createdAt: -1 })
      .then((category) => res.json(category))
      .catch((error) => res.status(400).send({ message: CATCH_ERROR }));
  }

  // [POST] /category/add
  add(req, res, next) {
    const formData = req.body;
    const category = new Category(formData);
    category
      .save()
      .then(() => res.json(category))
      .catch((error) => res.status(400).send({ message: CATCH_ERROR }));
  }

  // [PUT] /category/update
  update(req, res, next) {
    Category.findByIdAndUpdate(req.body._id, req.body)
      .then(() => res.json(req.body))
      .catch((error) => res.status(400).send({ message: CATCH_ERROR }));
  }

  // [DELETE] /category/delete
  delete(req, res, next) {
    Category.findOneAndDelete({
      _id: req.params._id,
    })
      .then((data) => res.json({ message: SUCCESS }))
      .catch((error) => res.status(400).send({ message: CATCH_ERROR }));
  }
}

module.exports = new CategoryController();
