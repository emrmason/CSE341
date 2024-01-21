const mongodb = require("../connectDB/connection");
const { ObjectID } = require('mongodb');

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

const singleContact = async(req, res, next) => {
    try{
        const userID = ObjectID(req.params.id);
        const client = await mongodb.connectDB();
        const collection = client.db("Test").collection("Contacts");
        const result = await collection.find({_id: userID}).toArray();
        if(result.length > 0){
            console.log(result[0]);
            res.send(result[0]);
        } else {
            res.send("Contact not found");
        }
    } catch(error) {
        console.error(error);
        next(error);
    }    
}

module.exports = { listContacts, singleContact }