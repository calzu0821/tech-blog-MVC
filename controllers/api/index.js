const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

// Use the imported userRoutes and postRoutes as middleware.
// Meaning that any request to '/users' or '/posts' will be passed to the corresponding route handlers defined in 'userRoutes' and 'postRoutes'.
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;