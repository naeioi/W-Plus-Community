var multer = require('multer');
var Event = require('../proxy/Event');
var router

var reserve = function(req, res, next) {
  res.send({
    sucess: false,
    msg: 'Reserve not implemented!'
  })
}

module.exports = reserve;
