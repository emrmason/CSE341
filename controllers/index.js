// const name1 = (req, res, next) => {
//     res.send("Josh Mason");
// };

// const name2 = (req, res, next) => {
//     res.send("Mitchell Mason");
// };
const { MongoClient } = require("mongodb");

const connectDB = async () => {
    const URI = process.env.DB_URL;
    const client = new MongoClient(URI);
    try {
       await client.connect(); 
       console.log("DB connected!")
       await listDatabases(client);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }    
};

async function listDatabases(client){
    const databaseslist = await client.db().admin().listDatabases();
    console.log("databases:");
}

module.exports = { connectDB, listDatabases };