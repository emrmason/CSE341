const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require('./connectDB/connection');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

require('dotenv').config();

app.use(bodyParser.json());

app.use('/', require('./routes/contacts'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, ()=> {
        console.log(`Server is running on port ${port}... Nothing to see here, move along.`);
});

