const express = require("express"); const db = require("./db.js"); const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static("images"));



// Route to get all posts
app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM fakestore_catalog", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

// Route to get one post
app.get("/api/getFromId/:id", (req, res) => {
    const id = req.params.id;
    db.query(
        "SELECT * FROM fakestore_catalog WHERE id = ?", id,
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