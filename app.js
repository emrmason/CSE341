// help from: https://www.youtube.com/watch?v=VShtPwEkDD0, this week's tutorial video from reading// 

const express = require("express");
const app = express();
// const router = express.Router();
// const port = 3000;

app.get('/', (req, res)=>{
    res.send("Ronald Weasley");
});

app.listen(process.env.PORT || 3000, function(error) {
    if(error) {
        console.log(`Houston, we have a problem... ${error}`);
    }
    else {
        console.log(`Nothing to see here, move along.`);
    }
})

