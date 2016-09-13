var express = require('express');
var config = require('../config')
var router = express.Router();
var logger = require('../common/logger');
var eventproxy = require('eventproxy');
var superagent = require('superagent');

var User = require('../model').User;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var checkLogin = function(req, res, next) {
  if(!req.session.user) {
    res.status(400);
    res.send({
      sucess: false,
      msg: 'User not login!'
    })
  }
}

/* Retrive Part */
router.get('/api/login', require('./login'));
router.get('/api/eventRoll', require('./eventRoll'));
router.get('/api/event', require('./event'));
router.get('/api/my', checkLogin);
router.get('/api/my', require('./my'));

/* Update Part */
router.post('/api/reserve', require('./reserve'));
router.post('/api/apply', require('./apply'));
router.post('/api/reply', require('./reply'));
router.post('/api/upload/avatar', require('./avatar'));

router.get('/test', function(req, res, next) {
  res.send("hello");
});

router.get('/', function(req, res, next) {
  res.send('root');
})

module.exports = router;
