const express = require('express');
const bookRouter = express.Router();

bookRouter.route('/')
    .get((req, res) => {
        res.send('Hello Books');
    });

bookRouter.route('/single')
    .get((req, res) => {
        res.send('Hello single book');
    });

module.exports = bookRouter;
