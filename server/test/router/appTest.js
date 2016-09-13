var express = require('express');
var router1 = require('./router1');
var router2 = require('./router2');

var app = express();

app.use('/', router1);

app.listen(3000, function() {
    console.log('listening on port 80!');
})
