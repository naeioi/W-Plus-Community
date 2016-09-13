
/*
 * 同心云登陆时传来ticket，
 * 访问同心云API获取其sid，
 * 再到数据库拉取sid对应user，
 * 放入session.user中
 */

var eventproxy = require('eventproxy');
var superagent = require('superagent');
var logger = require('logger');
var User = require('../proxy/User')

var login = function(req, res, next) {
  var ticket = req.query.ticket;
  var ep = new eventproxy();

  ep.fail(next);

  superagent.get(config.getSidUrl)
    .query({
      ticket: ticket,
      appId: config.appId,
      appSecret: config.appSecret,
      key: config.key
    })
    .end(function(err, res) {
      if(err) {
        logger.error('Get Sid Fail - ticket: ' + ticket);
        next(err);
        return;
      }

      if(res.body.type === 'error') {
        logger.error('Sid Server responsed error: ' + res.body.result);
        next(err);
        return;
      }

      logger.debug('Get Sid ' + res.body.result + ' ok');
      ep.emit('getSid', res.body.result);
    })

  /* 从同心云接口获取学号 */
  var ssid;
  ep.all('getSid', function(sid) {
    ssid = sid;
    User.getBySid(sid, ep.done('getUser'));
  })

  ep.all('getUser', function(user) {
    /* Create new User */
    if(!user) {
      User.createNewUser(ssid, function(err, nuser) {
        if(err) {
          looger.error('New User error sid %s', ssid);
          next(err);
        }
        else {
          ep.emit('redirect', nuser);
        }
      })
    }
    /* Exist User */
    else {
      ep.emit('redirect', user);
    }
  })

  ep.all('redirect', function(user) {
    req.session.user = user;
    res.redirect('/');
  })
}

module.exports = login;
