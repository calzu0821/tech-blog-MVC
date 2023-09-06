const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Use the imported homeRoutes and apiRoutes as middleware.
// Meaning that requests to '/' or '/api' will be passed to the corresponding route handlers defined in 'homeRoutes' and 'apiRoutes'.
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;