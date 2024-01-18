const name1 = (req, res, next) => {
    res.send("Ronald Weasley");
};

const name2 = (req, res, next) => {
    res.send("The boy who lived");
};

const { MongoClient } = require("mongodb");
// const username = encodeURIComponent("emasoncse341");
// const password = encodeURIComponent("thisismylongpassword");

async function main() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await listDatabases(client);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }

};

module.exports = { name1, name2, main };