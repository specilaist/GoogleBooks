const axios = require('axios');

const { Books } = require('../model');

module.exports = {
	searchBooks: async (req, res) => {
		try {
			console.log(req);
			let searchedBooks = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
			return res.json(searchedBooks)
		} catch (e) {
			console.log(e)
			throw new Error(e)
		}
	},
	findLikedBooks: async (req, res) => {
		try {
			console.log(req);
			let findBook = await Books.find({liked: true})
			return res.json(findBook)
		} catch (e) {
			console.log(e)
			throw new Error(e)
		}
	},
	deleteBook: async (req, res) => {
		try {
			console.log(req.params.id);
			let deletedBook = await Books.deleteOne({_id: `${req.params.id}`})
			return res.json(deletedBook)
		} catch (e) {
			console.log(e)
			throw new Error(e)
		}
	}
};
