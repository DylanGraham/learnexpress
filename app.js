var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('index', { title: 'Hello from render', list: ['a', 'b', 'c'] });
});
app.get('/books', function (req, res) {
    res.send('Hello books!\n');
});
app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});
