const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, maxlength: 255, required: true, unique: true },
    email: { type: String, maxlength: 255, required: true, unique: true },
    password: { type: String, maxlength: 255, required: true },
    isAdmin: { type: Boolean, default: false }
  }, {
    timestamps: true
  });

module.exports = mongoose.model('User', UserSchema);