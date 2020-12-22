const axios = require('axios');
const { response } = require('express');

const { Books } = require('../model');

module.exports = {
	searchBooks: async (req, res) => {
		console.log('this is the searchBooks controller', req);
		axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req}`)
			.then(response => {
				console.log(response)
				res.json(response)
			})
			.catch(e => console.log(e))
	},
	createBook: async (req, res) => {
		try {
			console.log(req.body);
			let findBook = await Books.creat(`${req.body}`)
			return res.json(findBook)
		} catch (e) {
			console.log(e)
			throw new Error(e)
		}
	},
	updateBook: async (req, res) => {
		try {
			console.log(req.body);
			let findBook = await Books.creat(`${req.body}`)
			return res.json(findBook)
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
	findMyBooks: async (req, res) => {
		try {
			console.log(req);
			let findBook = await Books.find({mine: true})
			return res.json(findBook)
		} catch (e) {
			console.log(e)
			throw new Error(e)
		}
	},
	removeLikedBooks: async (req, res) => {
		try {
			console.log(req);
			let findBook = await Books.findOneAndUpdate({ id: req.params.id }, {liked: true})
			return res.json(findBook)
		} catch (e) {
			console.log(e)
			throw new Error(e)
		}
	},
	removeMyBooks: async (req, res) => {
		try {
			console.log(req);
			let findBook = await Books.findByIdAndDelete({id: req.params.id}, {mine: true})
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
