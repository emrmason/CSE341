const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require('./connectDB/connection');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const cors = require('cors');

require('dotenv').config();

app.use(bodyParser.json());

app.use('/', require('./routes/contacts'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

app.use((request, response, next) => {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
        );
        response.setHeader('Access-Control-Allow-Private-Network', 'true');
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
      });

app.listen(port, ()=> {
        console.log(`Server is running on port ${port}... Nothing to see here, move along.`);
});

