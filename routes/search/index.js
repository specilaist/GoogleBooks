const router = require('express').Router();

const API = require('../../controllers/apiController');

router.route('/')
	.get(API.searchBooks)

module.exports = router