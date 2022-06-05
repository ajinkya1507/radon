const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        unique: true,
        required:true
    },
    authorName: String,

    genre: [String],
}, { timestamps: true });

module.exports = mongoose.model('Book1', bookSchema) //users