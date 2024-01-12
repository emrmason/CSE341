// help from: https://www.youtube.com/watch?v=VShtPwEkDD0, this week's tutorial video from reading// 
const express = require("express");
const app = express();


app.use('/', require('./routes'));

// MOVED TO ..routes/index.js
// const router = express.Router();

// this is the route
// router.get('/', (req, res, next)=>{
//     res.send("Ronald Weasley");
// });

// this is the server - running on a port assigned by server, or on localhost:3000
app.listen(process.env.PORT || 3000, ()=> {
    // if(error) {
    //     console.log(`Houston, we have a problem... ${error}`);
    // }
    // else {
        console.log(`Server is running on port 3000... Nothing to see here, move along.`);
    // }
})


// process.env.PORT || 3000 CAN be assigned to a constant of "port", might be better in the long run... 
