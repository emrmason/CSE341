const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

router.get('/api-docs', swaggerUi.setup(swaggerDocument));