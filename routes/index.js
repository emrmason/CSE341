const routes = require('express').Router();

const controller = require('../controllers');

// this is the route

// routes.get('/', controller.name1);

// routes.get('/second', controller.name2);

routes.get('/connectDB', async (req, res) => {
    try {
        await controller.connectDB();
        res.send("Database connected successfully!");
    } catch(error){
        console.log(error); 
    }
});

// notes from AI: need to call connectDB() as a FUNCTION, can't use it as a plain route... 

module.exports = routes;

// notes from ChatGPT... Question: Do I need to change the name of my file in order for it to be a module?
// No, you don't necessarily need to name your file differently for it to be a module. The concept of a module 
// in JavaScript refers to a reusable piece of code that can be exported and imported into other files. 
// The file name itself doesn't determine whether it's a module or not.

// In Node.js, any JavaScript file can act as a module, and you can export functionality from one file 
// to be used in another. The key is to use the module.exports or exports object to expose the parts of your 
// code that you want to make available to other modules.

// res.send("blah") vs. res.json("blah"): .send can handle lots of different types of data (more versatile), .json stringifies 
// a JS object into JSON (`Content-Type` needs to be explicitly set for JSON responses). 