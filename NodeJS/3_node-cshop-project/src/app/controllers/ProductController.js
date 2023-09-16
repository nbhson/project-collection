const { CATCH_ERROR } = require('../../const/error');
const { SUCCESS } = require('../../const/success');
const Product = require('../models/Product');

class ProductController {
  // [GET] /product/all
  all(req, res, next) {
    Product.find({})
      .sort({ createdAt: -1 })
      .then((product) => res.json(product))
      .catch((error) => res.status(400).send({ message: CATCH_ERROR }));
  }

  // [POST] product/byCategory
  byCategory(req, res, next) {
    Product.find({ categoryId: req.body['id'] })
      .sort({ createdAt: -1 })
      .then((product) => res.json(product))
      .catch((error) => res.status(400).send({ message: CATCH_ERROR }));
  }

  // [POST] product/productInfo
  productInfo(req, res, next) {
    Product.findOne({ id: req.body['id'] })
      .sort({ createdAt: -1 })
      .then((product) => res.json(product))
      .catch((error) => res.status(400).send({ message: CATCH_ERROR }));
  }

  // [POST] /product/add
  add(req, res, next) {
    const formData = req.body;
    const product = new Product(formData);
    product
      .save()
      .then(() => res.json(product))
      .catch((error) => res.status(400).send({ message: CATCH_ERROR }));
  }

  // [PUT] /product/update
  update(req, res, next) {
    Product.findByIdAndUpdate(req.body._id, req.body)
      .then(() => res.json(req.body))
      .catch((error) => res.status(400).send({ message: CATCH_ERROR }));
  }

  // [DELETE] /product/delete
  delete(req, res, next) {
    Product.findOneAndDelete({
      _id: req.params._id,
    })
      .then((data) => res.json({ message: SUCCESS }))
      .catch((error) => res.status(400).send({ message: CATCH_ERROR }));
  }
}

module.exports = new ProductController();
