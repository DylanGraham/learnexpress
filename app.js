var express = require('express');
var app = express();
var port = 8000;
app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});
