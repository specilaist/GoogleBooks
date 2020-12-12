const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
	bookAuthor: String,
	bookTitle: String,
	bookSummary: String,
	liked: Boolean,
	mine: Boolean
}, {
	timestamps: { createdAt: 'created_at' }
});

const Books = model('Books', BookSchema);

module.exports = Books