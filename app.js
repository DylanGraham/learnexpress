var express = require('express');
var app = express();
var bookRouter = require('./src/routes/bookRoutes');
var port = process.env.PORT || 8000;
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/Books', bookRouter);
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [
            { Link: '/Books', Text: 'Books' },
            { Link: '/Authors', Text: 'Authors' }
        ]
    });
});
app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});
