const { MongoClient } = require("mongodb");

let _db;

// Do I need to add a URL parser in here? { useNewUrlParser: true} = maybe on line 9 or 10, when connecting to URI
// example: https://www.youtube.com/watch?v=vjf774RKrLc at 13:49

const connectDB = async () => {
    const URI = process.env.DB_URL;
    const client = new MongoClient(URI);
    try {
        await client.connect(); 
        _db = client;
        // console.log("DB connected");
    } catch (error) {
        console.log(error);
    }   
    return _db;
};

module.exports = { connectDB };
