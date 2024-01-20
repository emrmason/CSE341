const { MongoClient } = require("mongodb");
const contactsData = require("../controllers/contacts");

const connectDB = async () => {
    const URI = process.env.DB_URL;
    const client = new MongoClient(URI);
    try {
        await client.connect(); 
        // await listDatabases(client);
        await listContacts(client);
        await singleContact(client);
    } catch (error) {
        console.log(error);
    } // finally {
    //     await client.close();
    // }    
};

// async function listDatabases(client){
//     const databaseslist = await client.db().admin().listDatabases();
//     console.log("databases:");
//     databaseslist.databases.forEach(db => console.log(`-${db.name}`));
// }

async function listContacts(client) {
    const contactList = await client.db("Test").collection("Contacts").find().forEach(function(myDoc){
        console.log("Name:" + myDoc.firstName + " " + myDoc.lastName );
    });
    // const results = await contactList.toArray();
    // console.log(contactList);
}

async function singleContact(client) {
    const oneContact = await client.db("Test").collection("Contacts").find().forEach(function(myDoc){
        const contactArray = []
        contactArray.push(myDoc._id);
        console.log(contactArray);
    })
}
module.exports = connectDB;
