const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
var mongoose_delete = require('mongoose-delete');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: 5,
    required: true,
  },
  name: {
    type: String,
    default: '',
    minlength: 5,
    required: true,
  },
  phone: {
    type: String,
    default: '',
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  avatar: {
    type: String,
    default: '',
  },
  online: {
    type: Boolean,
    default: false,
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

User.plugin(mongoose_delete);
User.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: 'all',
}); // những thằng nào có field deleted:true sẽ không hiện ra & kèm thời gian xóa

module.exports = mongoose.model('User', User);
