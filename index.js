const express = require("express");
var app = express();

app.listen(8000, () => {
    console.log("Server is listening on port " + 8000);
});

app.get('/', (req, res) => {
    res.json('Молодец!')
})