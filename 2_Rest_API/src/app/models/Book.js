const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: { type: String, maxlength: 255, required: true },
    publishedDate: { type: String },
    genres: { type: [String] },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" }
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Book', BookSchema);