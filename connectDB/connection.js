const { MongoClient } = require("mongodb");
const contactsData = require("../controllers/contacts");

const connectDB = async () => {
    const URI = process.env.DB_URL;
    const client = new MongoClient(URI);
    try {
        await client.connect(); 
    } catch (error) {
        console.log(error);
    }   
    return client;
};


async function listContacts(client) {
    const contactList = await client.db("Test").collection("Contacts").find().forEach(function(myDoc){
        const contactList = [];
        contactList.push(myDoc);
        console.log(contactList);
    });
    // const results = await contactList.toArray();
    // console.log(contactList);
}

async function singleContact(client) {
    const contacts = await client.db("Test").collection("Contacts").find().forEach(function(myDoc){
        const contactArray = []
        contactArray.push(myDoc._id);
        //console.log(contactArray);
    })
    const oneContact = 
}
module.exports = connectDB;
