const express = require('express');
const app = express();
const port = 8000;

app.listen(port, err => {
    console.log('Running server on port ' + port);
});
