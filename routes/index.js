const router = require('express').Router();
const controller = require('../controllers/index');

//router.use('/', controller.name1);

router.get('/', controller.name1);

// module.exports = router;

