const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Message = new Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    default: new Date().getTime(),
  },
  user: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model('Message', Message);
