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

router.get('/api/login', require('./login'));
router.get('/api/eventRoll', require('./eventRoll'));
router.get('/api/event', require('./event'));
router.get('/api/my', require('./my'));
// router.get('/api/')

router.get('/test', function(req, res, next) {
  res.send("hello");
});

router.get('/', function(req, res, next) {
  res.send('root');
})

module.exports = router;
