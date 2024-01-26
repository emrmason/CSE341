const router = require('express').Router();
const controller = require('../controllers/index');

router.use('/contacts', require('./contacts'));

router.get('/', controller.name1);

// module.exports = router;

