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

const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const app = express();
const PORT = 4000;

const uri = "mongodb+srv://ltordai:IxbzvnbKkDEhmMcf@cluster0.8grfzis.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


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

// HOME/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get all posts
app.get("/api/home/get", (req, res) => {
    const collection = database.collection("home");
    collection.find({}).toArray((err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

// Get one section for home from ID
app.get("/api/home/getFromId/:id", (req, res) => {
    const id = req.params.id;
    const collection = database.collection("home");
    collection.findOne({ id: parseInt(id) }, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

// Get one section for home from title
app.get("/api/home/getFromTitle/:title", (req, res) => {
    const title = req.params.title;
    const collection = database.collection("home");
    collection.findOne({ title: title }, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
