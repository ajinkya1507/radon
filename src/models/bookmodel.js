const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    genre: String,
}, { timestamps: true });

module.exports = mongoose.model('Book1', bookSchema) //users