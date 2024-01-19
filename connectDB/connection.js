const { MongoClient } = require("mongodb");

const connectDB = async () => {
    const URI = process.env.DB_URL;
    const client = new MongoClient(URI);
    try {
       await client.connect(); 
    //    await listDatabases(client);
    //    console.log(databaseslist);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }    
};

// async function listDatabases(client){
//     const databaseslist = await client.db().admin().listDatabases();
//     console.log("databases:");
// }

module.exports = connectDB;
