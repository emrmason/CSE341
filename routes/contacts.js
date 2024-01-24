const router = require('express').Router();
const contactsController = require("../controllers/contacts");

router.get('/', contactsController.listContacts);

router.get('/single/:id', contactsController.singleContact);   

module.exports = router;
