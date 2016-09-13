var express = require('express');
var router2 = express.Router();

router2.get('/bar', function(req, res) {
    res.send('This is bar');
})

module.exports = router2;