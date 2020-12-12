const router = require('express').Router();

const likeRoutes = require('./likedBooks');
const myRoutes = require('./myBooks');
const searchRoutes = require('./search');

router.use('/', searchRoutes);
router.use('/likedbooks', likeRoutes);
router.use('/mybooks', myRoutes);

module.exports = router