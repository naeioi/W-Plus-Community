var config = require('./config');
var logger = require('./common/logger');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('compression')());

var mocks = {
  ticket: '1234567',
  sid: '1450000'
};

app.get('/getSid', function(req, res, next) {
  if(req.query.ticket != mocks.ticket) {
    res.send({
      type: 'error',
      result: 'ticket is null'
    })
  }
  else if(req.query.appId != config.appId) {
    res.send({
      type: 'error',
      result: 'appId is null'
    })
  }
  else if(req.query.appSecret != config.appSecret) {
    res.send({
      type: 'error',
      result: 'appSecret is null'
    })
  }
  else if(req.query.key != config.key) {
    res.send({
      type: 'error',
      result: 'key is null'
    })
  }
  else {
    res.send({
      type: 'success',
      result: mocks.sid
    })
  }
})

app.get('/getOneTicket', function(req, res) {
  logger.info('Request one ticket');
  res.send(mocks.ticket);
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

if(!module.parent) {
  app.listen(config.mockPort, function() {
    logger.info('TJ Cloud mock api server is running on port ' + config.mockPort + '...');
  })
}

exports.app = app;
exports.mock = mocks;
