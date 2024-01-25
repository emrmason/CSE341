const { response } = require("express");
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
        const userID = new ObjectID(req.params.id);
        const client = await mongodb.connectDB();
        const collection = client.db("Test").collection("Contacts");
        const result = await collection.find({_id : userID}).toArray();
        if(result.length > 0){
            // console.log(result);
            res.send(result);
        } else {
            res.send("Contact not found");
        }
    } catch(error) {
        console.error(error);
        next(error);
    }    
});

const newContact = async(req, res, next) => {
    const client = await mongodb.connectDB();
    let newUser =     {
        "firstName": "Jack",
        "lastName": "Skellington",
        "email": "jskell@gmail.com",
        "favoriteColor": "black",
        "birthday": "October 31"
    }
    try{
        const collection = client.db("Test").collection("Contacts");
        const result = await collection.insertOne(newUser);
        console.log(`Insterted contact with _id: ${result._id}`);

    } catch(error) {
        console.error("Error: ", error);
        
    } finally {
        await client.close();
        console.log("Connection closed, sucka.")
    }
}

// const updateContact = async(req, res, next) =>{
//     const client = await mongodb.connectDB();

//     try {
//         const collection = client.db("Test").collection("Contacts");
//         const userID = new ObjectID(req.params.id);
//         console.log("Roger Roger.");
//     } catch (error) {
//         console.log("Error: ", error);
//     } finally {
//         client.close();
//         console.log("Connection closed, sucka.")
//     }
// }

module.exports = { listContacts, singleContact, newContact }