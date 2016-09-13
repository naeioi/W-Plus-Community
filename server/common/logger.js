var config = require('../config');
var log4js = require('log4js');
var env = process.env.NODE_ENV || "development"

log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: config.log_filename, category: 'w-plus' }
  ]
});

var logger = log4js.getLogger('w-plus');
logger.setLevel(config.debug && env !== 'test' ? 'DEBUG' : 'ERROR');

module.exports = logger;
