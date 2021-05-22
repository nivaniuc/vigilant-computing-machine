const express = require('express');
const app = express();
const { db } = require('./db/db');
const path = require("path");
const PORT = process.env.PORT || 3000;

app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });

app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });

app.use(express.static('public'))
  
app.listen(PORT, () => {
    console.log(`server now on port ${PORT}!`);
  });