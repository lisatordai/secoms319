//To start up
// npm init
// npm install express
// npm install cors
// npm install body-parser
//npm install mongodb

//Make sure mongo running in background
//FOR MAC
//mongod --config /usr/local/etc/mongod.conf --fork

//Run
//nodemon appbackend.js

var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser"); app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";

const { MongoClient } = require("mongodb") 

const url = "mongodb+srv://ltordai:IxbzvnbKkDEhmMcf@cluster0.8grfzis.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "final";
const client = new MongoClient(url);
const db = client.db(dbName);


app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static("images"));

let database;

client.connect(err => {
    if (err) {
        console.log("Error connecting to MongoDB:", err);
    } else {
        database = client.db("final");
        console.log("Connected to MongoDB");
    }
});

// HOME //////////////////////////////////////////////////////////////////////////////////////////
// Get all posts
//http://localhost:8081/api/home/get
app.get("/api/home/get", async (req, res) => {
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

// Get one section for home from ID
//http://localhost:8081/api/home/getFromId/1
app.get("/api/home/getFromId/:id", async (req, res) => {
    const sectionid = Number(req.params.id);
    console.log("Home section to find :", sectionid);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "id": sectionid };
    const results = await db
        .collection("home")
        .findOne(query)
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});


// MANAGER ////////////////////////////////////////////////////////////////////////////////////////
// Get all manager posts
//http://localhost:8081/api/manager/get
app.get("/api/manager/get", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");

    const query = {};
    const results = await db
        .collection("manager")
        .find(query)
        .limit(100)
        .toArray();

    console.log(results);
    res.status(200);
    res.send(results);
});

// Get manager from Id
//http://localhost:8081/api/manager/getFromId/1
app.get("/api/manager/getFromId/:id", async (req, res) => {
    const managerid = Number(req.params.id);
    console.log("Manager to find :", managerid);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "id": managerid };
    const results = await db
        .collection("manager")
        .findOne(query)
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});

// GREENHOUSE ////////////////////////////////////////////////////////////////////////////////////
// Get all greenhouse posts
//http://localhost:8081/api/greenhouse/get
app.get("/api/greenhouse/get", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");

    const query = {};
    const results = await db
        .collection("greenhouse")
        .find(query)
        .limit(100)
        .toArray();

    console.log(results);
    res.status(200);
    res.send(results);
});

// Get greenhouse from Id
//http://localhost:8081/api/greenhouse/getFromId/1
app.get("/api/greenhouse/getFromId/:id", async (req, res) => {
    const greenhouseid = Number(req.params.id);
    console.log("Manager to find :", greenhouseid);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "id": greenhouseid };
    const results = await db
        .collection("manager")
        .findOne(query)
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});

// CURRENT RESEARCH ///////////////////////////////////////////////////////////////////////////////
// Get all current_research posts
//http://localhost:8081/api/research/get
app.get("/api/research/get", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");

    const query = {};
    const results = await db
        .collection("current_research")
        .find(query)
        .limit(100)
        .toArray();

    console.log(results);
    res.status(200);
    res.send(results);
});

// Get current_research from Id
//http://localhost:8081/api/research/getFromId/1
app.get("/api/research/getFromId/:id", async (req, res) => {
    const researchid = Number(req.params.id);
    console.log("Manager to find :", researchid);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "id": researchid };
    const results = await db
        .collection("manager")
        .findOne(query)
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});

// GREENHOUSE SPACE RATES ////////////////////////////////////////////////////////////////////////
// Get all space posts
//http://localhost:8081/api/space/get
app.get("/api/space/get", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");

    const query = {};
    const results = await db
        .collection("greenhouse_space_rates")
        .find(query)
        .limit(100)
        .toArray();

    console.log(results);
    res.status(200);
    res.send(results);
});

// Get space from Id
//http://localhost:8081/api/space/getFromId/1
app.get("/api/space/getFromId/:id", async (req, res) => {
    const spaceid = Number(req.params.id);
    console.log("Manager to find :", spaceid);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "id": spaceid };
    const results = await db
        .collection("greenhouse_space_rates")
        .findOne(query)
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});

// GREENHOUSE CHAMBER RENTAL RATES ////////////////////////////////////////////////////////////////
// Get all chamber rental posts
//http://localhost:8081/api/chamber/get
app.get("/api/chamber/get", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");

    const query = {};
    const results = await db
        .collection("greenhouse_chamber_rental_rates")
        .find(query)
        .limit(300)
        .toArray();

    console.log(results);
    res.status(200);
    res.send(results);
});

// Get chamber rental from Id
//http://localhost:8081/api/chamber/getFromId/1
app.get("/api/chamber/getFromId/:id", async (req, res) => {
    const chamberid = Number(req.params.id);
    console.log("Manager to find :", chamberid);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "Id": chamberid };
    const results = await db
        .collection("greenhouse_chamber_rental_rates")
        .findOne(query)
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});

// MANAGER RESPONSIBILITIES //////////////////
// Get all responsibilities section posts
app.get("/api/responsibilities/get", (req, res) => {
    const collection = database.collection("manager_responsibilities");
    collection.find({}).toArray((err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

// Get responsibilities section from Id
app.get("/api/responsibilities/getFromId/:id", (req, res) => {
    const id = req.params.id;
    const collection = database.collection("manager_responsibilities");
    collection.findOne({ id: parseInt(id) }, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});