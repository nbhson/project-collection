const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema({
  name: {
    type: String,
    default: '',
    minlength: 5,
    required: true,
  },
  image: {
    type: String,
    default: '',
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  description: {
    type: String,
    default: '',
    required: true,
  },
  categoryId: {
    type: String,
    default: '',
    required: true,
  },
  createdAt: {
    type: Number,
    default: new Date().getTime(),
  },
  updatedAt: {
    type: Number,
    default: new Date().getTime(),
  },
});

module.exports = mongoose.model('Product', Product);
