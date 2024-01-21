const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

const db = require('./connectDB/connection');

app.use('/', require('./routes'));

app.listen(port, ()=> {
        console.log(`Server is running on port ${port}... Nothing to see here, move along.`);
});

