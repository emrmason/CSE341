const router = require('express').Router();
const contactsController = require("../controllers/contacts");

router.get('/contacts', contactsController.listContacts);

router.get('/single/:id', contactsController.singleContact);  

router.post('/newContact', contactsController.newContact);

router.put('/updateContact/:id', contactsController.updateContact);

router.delete('/deleteContact/:id', contactsController.removeContact);

module.exports = router;

//Note: The route definition is what controls the http address. 
//If you want it to look differently, change what's in your route. 
//Learned from: ChatGPT