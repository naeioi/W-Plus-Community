
/* Content-Type: json */
/* Post Body {
    event_id: ObjectId,
    action: "join" | "quit"
  }
 */

var Event = require('../proxy/Event');
var checklogin = require('../middleware/checklogin');
var logger = require('../common/logger');

var join = function(req, res, next) {
  checklogin(req, res);
  var user_id = req.session.user._id;
  var event_id = req.body.event_id;
  var action = req.body.action || 'join';

  Event.findById(event_id, function(err, event) {
    if(err) {
      res.send({
        sucess: false,
        msg: 'Unknown error'
      })
      logger.error('Unable to get event, _id:', event_id);
      return;
    }

    if(!event) {
      res.send({
        sucess: false,
        msg: 'Event not found'
      })
      return;
    }

    if(!(action === 'join' || action === 'quit')) {
      res.send({
        sucess: false,
        msg: 'Unidentified action'
      })
      return;
    }

    var msg = {};
    var index = event.members_id.findIndex(function(e) { return e === user_id; });
    if(action === 'join') {
      if(index === -1) {
        event.members.push(user_id);
        msg = {
          sucess: true,
        }
      }
      else {
        msg = {
          sucess: false,
          msg: 'User have join event ' + event_id;
        }
      }
    }
    else {
      if(index === -1) {
        msg = {
          sucess: false,
          msg: "User didn't join event " + event_id;
        }
      }
      else {
        event.members.splice(index, 1);
        msg = {
          sucess: true
        }
      }
    }

    event.save(function(err) {
      if(err) {
        logger.error('Unsucessful save for', event, err);
        msg = {
          sucess: false,
          msg: 'Unsucessful save to the database!'
        }
        res.status(200);
      }

      res.send(msg);
    })
  })
}

module.exports = join;
