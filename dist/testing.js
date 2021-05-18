"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'notes-app';
mongodb_1.MongoClient.connect(dbURL).then((client) => {
    const db = client.db(dbName);
    console.log(db.databaseName);
}).catch((error) => {
    console.log(`Unable to connect to database: ${error.message}`);
});
