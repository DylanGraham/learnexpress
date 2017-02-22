const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Hello from render', list: ['a', 'b', 'c']});
});

app.get('/books', (req, res) => {
    res.send('Hello books!\n');
});

app.listen(port, err => {
    console.log('Running server on port ' + port);
});
