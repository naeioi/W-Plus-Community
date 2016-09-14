var multer = require('multer');
var Event = require('../proxy/Event');
var path = require('path');
var express = require('express');
var checklogin = require('../middleware/checklogin');

/* launch an event sub app */
var launch = express();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/upload')
  }
})
var upload = multer({ storage: storage });

launch.use(checklogin);

/* req.body see REST_API.md */
launch.post('/api/launch', upload.single('pic'), function(req, res, next) {
  var event = Event.createNew(req.body, [req.file.filename], function(err, event) {
    if(err) {
      next(err);
      return;
    }
    res.send({
      sucess: true
    })
  })
})

module.exports = launch;
