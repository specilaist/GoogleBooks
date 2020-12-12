const { Router } = require('express');

const router = require('express')
	.Router();

const { 
	searchBooks,
	findLikedBooks,
	deleteBook
} = require('../../controllers/apiController');
	
router.route('/')
	.get(findLikedBooks)

router.route('/:id')
	.delete(deleteBook)

module.exports = router;