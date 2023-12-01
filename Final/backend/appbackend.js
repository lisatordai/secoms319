const express = require("express"); const db = require("./db.js"); const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static("images"));


//HOME///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Route to get all posts
app.get("/api/home/get", (req, res) => {
    db.query("SELECT * FROM home", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

// Route to get one section for home from ID
app.get("/api/home/getFromId/:id", (req, res) => {
    const id = req.params.id;
    db.query(
        "SELECT * FROM home WHERE id = ?", id,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

// Route to get one section for home from title
app.get("/api/home/getFromTitle/:title", (req, res) => {
    const id = req.params.id;
    db.query(
        "SELECT * FROM home WHERE title = ?", id,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

// Route to get id from title
app.get("/api/home/getIdFromTitle/:title", (req, res) => {
    const id = req.params.id;
    db.query(
        "SELECT id FROM home WHERE title = ?", id,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});