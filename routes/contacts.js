const router = require('express').Router();
const contactsController = require("../controllers/contacts");

router.get('/', contactsController.listContacts);

router.get('/single/:id', contactsController.singleContact);  

router.post('/newContact', contactsController.newContact);

// router.put('/updateContact/:id', contactsController.updateContact);

module.exports = router;
