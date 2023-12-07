var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser"); app.use(cors());
app.use(bodyParser.json());
const port = "8081";
// const host = "coms101-pi-25";
const host = "localhost";
app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});

const { MongoClient } = require("mongodb");

// Mongo
const url = "mongodb+srv://ltordai:IxbzvnbKkDEhmMcf@cluster0.8grfzis.mongodb.net/";
const dbName = "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);

app.get("/listSections", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("home")
        .find(query)
        .limit(100)
        .toArray();

    console.log(results);
    res.status(200);
    res.send(results);
});

app.get("/:title", async (req, res) => {
    const sectionTitle = Number(req.params.id); console.log("Robot to find :", sectionTitle);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB"); const query = { "id": sectionTitle };
    const results = await db.collection("home")
        .findOne(query);
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});



