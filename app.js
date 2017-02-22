var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/', function (req, res) {
    res.send('Hello world!\n');
});
app.get('/books', function (req, res) {
    res.send('Hello books!\n');
});
app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});
