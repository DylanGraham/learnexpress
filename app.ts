const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', (req, res) => {
    res.send('Hello world!\n');
});

app.get('/books', (req, res) => {
    res.send('Hello books!\n');
});

app.listen(port, err => {
    console.log('Running server on port ' + port);
});
