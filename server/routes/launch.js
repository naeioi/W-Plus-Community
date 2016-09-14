
/* Content-Type: multipart/form-data */

var multer = require('multer');
var Event = require('../proxy/Event');
var path = require('path');
var express = require('express');
var checklogin = require('../middleware/checklogin');
var logger = require('../common/logger');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/upload')
  }
})
var upload = multer({ storage: storage }).single('pic');

var launch = function(req, res) {
  checklogin(req, res);

  upload(function(err) {

    if(err) {
      logger.error("Unable to save event's pic", err);
      res.status(200).send({
        sucess: false,
        msg: "Fail to save event's pic"
      })
      return;
    }

    /* req.body see REST_API.md */
    Event.createNew(req.body, [req.file.filename], function(err, event) {
      if(err) {
        logger.error('Fail to launch new event', err);
        res.status(200).send({
          sucess: false,
          msg: 'Fail to launch new event'
        })
        return;
      }
      res.send({
        sucess: true
      })
    })
  })
}

module.exports = launch;
