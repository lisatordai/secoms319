const mysql = require('mysql2')
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "my319user2",
    password: "my319password",
    database: "secoms319"
})
module.exports = db;

