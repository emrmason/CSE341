const mongodb = require("../connectDB/connection");
const ObjectID = require('mongodb').ObjectId;

const listContacts = async(req, res, next) => {
    try {
        const client = await mongodb.connectDB();
        const collection = client.db("Test").collection("Contacts");
        const result = await collection.find().toArray();
        if(result.length > 0) {
            // console.log(result);
            res.send(result);
        } else {
            res.send("Nothing found.");
        }
    } catch(error) {
        console.error(error);
        next(error);
    }
}

const singleContact = ('/:contacts', async(req, res, next) => {
    try{
        const userID = new ObjectID(req.params._id);
        const client = await mongodb.connectDB();
        const collection = client.db("Test").collection("Contacts");
        const result = await collection.find({_id: userID}).toArray();
        if(result){
            console.log(result[0]);
            res.send(result[0]);
        } else {
            res.send("Contact not found");
        }
    } catch(error) {
        console.error(error);
        next(error);
    }    
});

module.exports = { listContacts, singleContact }