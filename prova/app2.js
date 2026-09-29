var express = require('express');
var bodyParser=require('body-parser');
var app =express();
var port = 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/prova2/form.html');
});
app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Form submitted successfully!');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

