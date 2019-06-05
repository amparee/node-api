const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var contador = 0;
app.get('/hola', function(req, res) {
    contador++;
    console.log("GET - " + contador)
    res.json('[GET]Usuario local');
});

app.get('/asd', function(req, res) {
    res.send('[GET]Saludos desde express');
});


module.exports = app;