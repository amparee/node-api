//require('./config/config.js');

const express = require("express");
const mongoose = require('mongoose');
const app = express();
const mysql = require('mysql');
const bodyParser = require("body-parser");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_lunes"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM persona", function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/usuario'));

app.listen(3000, () => {
    console.log("Escuchando puerto 3000");
});