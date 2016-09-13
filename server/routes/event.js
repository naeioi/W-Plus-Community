
/*
 * 获取详细活动信息
 * Param： event_id
 * Return: {
      title: String,
      accepted: Bool,
      content: String,
      space: String,
      capacity: Number, //最大容纳人数
      start_time: Date,
      end_time: Date,
      replies: [Reply],
      pics_url: [String]
    }

    Reply: {
      id: ObjectId,
      content: String,
      author_id: ObjectId,
      author: String,
      avatar_url: String
    }
 */

var Event = require('../proxy/Event');
var Reply = require('../proxy/Reply');
var _ = require('lodash');

var event = function(req, res, next) {
  if(req.session.user == null) {
    res.send({
      sucess: false,
      msg: 'not login!'
    });
    return;
  }

  var ep = new eventproxy();

  ep.all('event', function(event) {
    var epfill = new eventproxy();

    epfill.all('replies', function(replies) {
      var docs = _.pick(event,
        ['title', 'accepted', 'content',
         'capacity', 'start_time', 'end_time',
         'pics_url']);
      docs.replies = replies;
      res.send({
        sucess: true,
        event: docs
      })
    })

    Reply.getById(event.reply_id, epfill.done('replies'));
  })

  Event.getById(req.query.event_id, ep.done('event'));
}

module.exports = event;
