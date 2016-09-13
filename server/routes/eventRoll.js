var Event = require('../proxy/Event');
var eventproxy = require('eventproxy');
var logger = require('../common/logger');

/*
 * 获取活动列表
 * Get /api/eventPoll
 * Param: type, skip, limit
 * type: enum { recent, as_author, as_member }
 * skip: Number
 * limit: Number
 */

var eventRoll = function(req, res, next) {
  var type = req.query.type;
  var skip = Number.parseInt(req.query.skip) || 0;
  var limit = Number.parseInt(req.query.limit) || 20;

  limit = limit > 30 ? 30 : limit;

  var ep = new eventproxy();

  var config = {
    skip: skip,
    limit: limit
  }

  if(type === 'recent') {
    Event.getRecent(config, ep.done('eventRoll'));
  }
  else if(type === 'as_author') {
    config.user_id = req.session.user._id;
    Event.getAsAuthor(config, ep.done('eventRoll'));
  }
  else if(type === 'as_member') {
    config.user_id = req.session.user._id;
    Event.getAsMember(config, ep.done('eventRoll'));
  }
  else {
    res.send({
      sucess: false,
      code: 0
    })
  }

  ep.all('eventRoll', function(roll) {
    res.send({
      sucess: true,
      eventRoll: roll
    })
  })
}

module.exports = eventRoll;
