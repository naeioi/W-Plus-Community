var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db, {
  server: {poolSize: 20}
}, function (err) {
  if (err) {
    logger.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

var User = require('./User');
var Event = require('./Event');
var Reply = require('./Reply');
var Message = require('./Message');
var Space = require('./Space');

exports.User = mongoose.model('User', User);
exports.Event = mongoose.model('Event', Event);
exports.Reply = mongoose.model('Reply', Reply);
exports.Message = mongoose.model('Message', Message);
exports.Space = mongoose.model('Space', Space);
