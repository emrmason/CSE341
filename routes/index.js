const routes = require('express').Router();

// this is the route
routes.get('/', (req, res, next)=>{
    res.send("Ronald Weasley");
});

module.exports = routes;

// notes from ChatGPT... Question: Do I need to change the name of my file in order for it to be a module?
// No, you don't necessarily need to name your file differently for it to be a module. The concept of a module 
// in JavaScript refers to a reusable piece of code that can be exported and imported into other files. 
// The file name itself doesn't determine whether it's a module or not.

// In Node.js, any JavaScript file can act as a module, and you can export functionality from one file 
// to be used in another. The key is to use the module.exports or exports object to expose the parts of your 
// code that you want to make available to other modules.