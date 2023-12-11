//TO START PC SETUP
// npm init
// npm install express
// npm install cors
// npm install body-parser
//npm install mongodb

//Make sure mongo running in background
//FOR MAC
//mongod --config /usr/local/etc/mongod.conf --fork

//RUN
//nodemon appbackend.js

//SETUP ///////////////////////////////////////////////////////////////////////////////////////////
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

client.connect(err => {
    if (err) {
        console.log("Error connecting to MongoDB:", err);
    } else {
        database = client.db("final");
        console.log("Connected to MongoDB");
    }
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
    console.log("Research to find :", researchid);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "id": researchid };
    const results = await db
        .collection("current_research")
        .findOne(query)
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});

//ADD, UPDATE, DELETE 
//Add new research section
app.post("/api/research/add", async (req, res) => {
    try {
        await client.connect();
        console.log("Node connected successfully to MongoDB");

        const newProduct = req.body;

        // Insert the new section into the "current_research" collection
        const result = await db.collection("current_research").insertOne(newProduct);

        console.log("Inserted new section with ID:", result.insertedId);

        res.status(201).json({ message: 'Research section added successfully' });
    } catch (error) {
        console.error('Error adding section:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
});

//Update research description text
app.put("/api/research/update", async (req, res) => {
    try {
        const { researchId, newText } = req.body;

        await client.connect();
        console.log("Node connected successfully to MongoDB");

        const result = await db.collection("current_research").updateOne(
            { "id": Number(researchId) },
            { $set: { "text": newText } }
        );

        if (result.modifiedCount === 1) {
            res.status(200).json({ message: 'Research text updated successfully' });
        } else {
            res.status(404).json({ error: 'Research not found or text not updated' });
        }
    } catch (error) {
        console.error('Error updating research text:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
});

app.delete("/api/research/delete", async (req, res) => {
    await client.connect();
    // const keys = Object.keys(req.body);
    const values = Object.values(req.body);
    const id = values[0]; // id
    console.log("Product to delete :", id);
    const query = { id: id };
    const results = await db.collection("current_research").deleteOne(query);
    res.status(200);
    res.send(results);
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
    console.log("Greenhouse to find :", greenhouseid);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "id": greenhouseid };
    const results = await db
        .collection("greenhouse")
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
    console.log("Space to find :", spaceid);
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
//Id is capital in db
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
    console.log("Chamber to find :", chamberid);
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




// MANAGER RESPONSIBILITIES //////////////////////////////////////////////////////////////////////
// Get all responsibilities section posts
//http://localhost:8081/api/responsibilities/get
app.get("/api/responsibilities/get", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");

    const query = {};
    const results = await db
        .collection("manager_responsibilities")
        .find(query)
        .limit(300)
        .toArray();

    console.log(results);
    res.status(200);
    res.send(results);
});




// Get responsibilities section from Id
app.get("/api/responsibilities/getFromId/:id", async (req, res) => {
    const myid = Number(req.params.id);
    console.log("Chamber to find :", myid);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "id": myid };
    const results = await db
        .collection("manager_responsibilities")
        .findOne(query)
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});

// DATA ////////////////////////////////////////////////////////////////////////////////////////
// Get all data posts from database, Raspberry Pi sends the data to database
//http://localhost:8081/api/data/get
app.get("/api/data/get", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");

    const query = {};
    const results = await db
        .collection("data")
        .find(query)
        .toArray();

    console.log(results);
    res.status(200);
    res.send(results);
});


















app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});