const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: { type: String, maxlength: 255, required: true },
    year: { type: Number },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ],
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Author', AuthorSchema);