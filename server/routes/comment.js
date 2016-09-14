
/* Content-Type: json ? */

var Event = require('../proxy/Event');
var Reply = require('../proxy/Reply');
var checklogin = require('../middleware/checklogin');
var logger = require('../common/logger');
var eventproxy = require('eventproxy');

/* TODO: add message to the event author */

var comment = function(req, res, next) {
  checklogin(req, res);
  var user_id = req.session.user._id;
  var event_id = req.body.event_id;
  var content = req.body.content;

  Event.findById(event_id, function(err, event) {
    if(err) {
      res.send({
        sucess: false,
        msg: 'Database fail: Unable to get event'
      })
      logger.error('Unable to get event, _id:', event_id);
      return ;
    }

    if(!event) {
      res.send({
        sucess: false,
        msg: 'Event not found'
      })
      return;
    }

    var reply = new Reply({
      event_id: event_id,
      author_id: user_id,
      content: content,
    })

    reply.save(function(err) {
      if(err) {
        logger.error('Unable to save reply', reply);
        res.status(200);
        res.send({
          sucess: false,
          msg: 'Unable to save reply to the database'
        })
        return;
      }
      res.send({
        sucess: true
      })
    });
  });
}

module.exports = comment;
