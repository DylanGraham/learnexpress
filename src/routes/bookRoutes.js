var express = require('express');
var bookRouter = express.Router();
bookRouter.route('/')
    .get(function (req, res) {
    res.send('Hello Books');
});
bookRouter.route('/single')
    .get(function (req, res) {
    res.send('Hello single book');
});
module.exports = bookRouter;
