var express = require('express');
var router1 = express.Router();
var router2 = require('./router2');

router1.get('/foo', function(req, res) {
   res.send('This is foo!');
})

router1.all('/bar', router2);

module.exports = router1;