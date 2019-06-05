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

app.post('/hola', function(req, res) {
    res.send('[POST]Saludos desde express');
});

app.get('/hola', function(req, res) {
    res.send('[GET]Saludos desde express');
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});