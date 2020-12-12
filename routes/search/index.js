const router = require('express').Router();

const { searchBooks } = require('../../controllers/apiController');

router.route('/')
	.get(searchBooks)

module.exports = router