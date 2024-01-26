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

const newContact = async(req, res) => {
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
        console.log(`Insterted contact with _id: ${result.insertedId}`);

    } catch(error) {
        console.error("Error: ", error);
        
    } finally {
        await client.close();
        console.log("The way is shut.")
    }
}

const updateContact = ('/:contacts', async(req, res) =>{
    const client = await mongodb.connectDB();
    try { 
        console.log("Connected to DB");  
        const userID = new ObjectID(req.params.id);
        const collection = client.db("Test").collection("Contacts")
        const result = await collection.updateOne({_id : userID}, {$set: {lastName: "SkibbitySkip"}});
        res.status(200).send(`Contact ${userID} has been updated! `);
    } catch (error) {
        console.log("Error: ", error);
    } 
    finally {
        client.close();
        console.log("The way is shut.")
    }
})

const removeContact = ('/:contacts', async (req, res) => {
    const client = await mongodb.connectDB();
    console.log("DB Connection established");
    const userID = new ObjectID(req.params.id);
    try {
        const collection = client.db("Test").collection("Contacts");
        const result = await collection.deleteOne({_id : userID});
        res.status(200).send(`Contact ${userID} has been removed.`);
    } catch(error) {
        console.log(error);
    } finally {
        client.close();
        console.log("Don't let the door hit you...");
    }
})

module.exports = { listContacts, singleContact, newContact, updateContact, removeContact }