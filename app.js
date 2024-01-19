// help from: https://www.youtube.com/watch?v=VShtPwEkDD0, this week's tutorial video from reading// 
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();
const { connectDB } = require('./controllers');

connectDB();
app.use('/', require('./routes'));

// this is the server - running on a port assigned by server, or on localhost:3000
app.listen(port, ()=> {
        console.log(`Server is running on port 3000... Nothing to see here, move along.`);
});



// process.env.PORT || 3000 CAN be assigned to a constant of "port", might be better in the long run... 
