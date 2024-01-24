const router = require('express').Router();
const controller = require('../controllers');

router.use('/', controller.name1);

router.use('/contacts', require('./contacts'));

module.exports = router;

