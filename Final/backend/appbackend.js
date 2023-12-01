const express = require("express"); const db = require("./db.js"); const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static("images"));


//HOME///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Get Calls /////////////////////////////////////////////////////////////

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
    const title = req.params.title;
    db.query(
        "SELECT * FROM home WHERE title = ?", title,
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
    const title = req.params.title;
    db.query(
        "SELECT id FROM home WHERE title = ?", title,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

// Route to get title from id
app.get("/api/home/getTitleFromId/:id", (req, res) => {
    const id = req.params.id;
    db.query(
        "SELECT title FROM home WHERE id = ?", id,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

// Route to get text from title
app.get("/api/home/getTextFromTitle/:title", (req, res) => {
    const title = req.params.title;
    db.query(
        "SELECT text FROM home WHERE title = ?", title,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

// Route to get text from Id
app.get("/api/home/getTextFromId/:id", (req, res) => {
    const id = req.params.id;
    db.query(
        "SELECT text FROM home WHERE id = ?", id,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

//Post Calls /////////////////////////////////////////////////////////////
//Delete Calls ///////////////////////////////////////////////////////////





//MANAGER///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Get Calls /////////////////////////////////////////////////////////////

// Route to get all manager posts
app.get("/api/manager/get", (req, res) => {
    db.query("SELECT * FROM manager", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

// Route to get manager from Id
app.get("/api/manager/getFromId/:id", (req, res) => {
    const id = req.params.id;
    db.query(
        "SELECT * FROM manager WHERE id = ?", id,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

// Route to get manager from name
app.get("/api/manager/getFromName/:name", (req, res) => {
    const name = req.params.name;
    db.query(
        "SELECT * FROM manager WHERE name = ?", name,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

//Post Calls /////////////////////////////////////////////////////////////
//Delete Calls ///////////////////////////////////////////////////////////








//GREENHOUSE////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Get Calls /////////////////////////////////////////////////////////////
/*
 TODO
 */


//Post Calls /////////////////////////////////////////////////////////////
//Delete Calls ///////////////////////////////////////////////////////////



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});