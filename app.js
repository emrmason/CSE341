const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require('./connectDB/connection');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());

app.use('/', require('./routes'));

app.listen(port, ()=> {
        console.log(`Server is running on port ${port}... Nothing to see here, move along.`);
});

