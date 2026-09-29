var express = require('express');
var app =express();
var port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Frontend/Gamers Forum.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});