const mongodb = require("../connectDB/connection");
const ObjectId = require("mongodb").ObjectId;

const listContacts = async (req, res, next) => {
  try {
    const client = await mongodb.connectDB();
    const collection = client.db("Test").collection("Contacts");
    const result = await collection.find().toArray();
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send("Nothing found.");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const singleContact =
  ("/:contacts",
  async (req, res, next) => {
    try {
      const userID = new ObjectId(req.params.id);
      const client = await mongodb.connectDB();
      const collection = client.db("Test").collection("Contacts");
      const result = await collection.find({ _id: userID }).toArray();
      if (result.length > 0) {
        // console.log(result);
        res.send(result);
      } else {
        res.send("Contact not found");
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

const newContact = async (req, res) => {
  const client = await mongodb.connectDB();
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  try {
    const collection = client.db("Test").collection("Contacts");
    const result = await collection.insertOne(newUser);
    res.status(200).send(`Insterted contact with _id: ${result.insertedId}`);
  } catch (error) {
    console.error("Error: ", error);
  } finally {
    await client.close();
    console.log("The way is shut.");
  }
};

const updateContact =
  ("/:contacts",
  async (req, res) => {
    const client = await mongodb.connectDB();
    try {
      // console.log("Connected to DB");
      const collection = client.db("Test").collection("Contacts");
      const userID = new ObjectId(req.params.id);
      const filter = { _id: userID };
      const update = {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          favoriteColor: req.body.favoriteColor,
          birthday: req.body.birthday,
        },
      };
      const result = await collection.findOneAndUpdate(filter, update);
      res.status(204).send(`User ${userID} updated.`);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      client.close();
      console.log("The way is shut.");
    }
  });

const removeContact =
  ("/:contacts",
  async (req, res, next) => {
    const client = await mongodb.connectDB();
    console.log("DB Connection established");
    const userID = new ObjectId(req.params.id);
    try {
      const collection = client.db("Test").collection("Contacts");
      const result = await collection.deleteOne({ _id: userID });
      res.status(200).send(`Contact ${userID} has been removed.`);
    } catch (error) {
      console.log(error);
    } finally {
      client.close();
      console.log("Don't let the door hit you...");
    }
  });

module.exports = {
  listContacts,
  singleContact,
  newContact,
  updateContact,
  removeContact,
};

//Notes: PUT will create a new resource if it can't find the one requested.
// with PUT you must send ALL data, including the bit you want changed.
// with PATCH you can send only data that you want to change- can be a single field.
// https://www.freecodecamp.org/news/http-request-methods-explained/#:~:text=If%20you%20just%20want%20to,you%20make%20a%20PUT%20request.
