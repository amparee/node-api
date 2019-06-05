const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/hola', function(req, res) {
    res.json('[GET]Usuario local');
});

app.get('/asd', function(req, res) {
    res.send('[GET]Saludos desde express');
});


module.exports = app;