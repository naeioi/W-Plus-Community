var Event = require('../proxy/Event');
var checklogin = require('../middleware/checklogin');

var join = function(req, res, next) {
  checklogin(req, res);
  var user_id = req.session.user._id;
  var event_id = req.param.event_id;
  var action = req.param.action || 'join';

  Event.findById(event_id, function(err, event) {
    if(err) {
      res.send({
        sucess: false,
        msg: 'Unknown error'
      })
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

    var index = Event.members_id.findIndex(function(e) { return e === user_id; });
    if(action === 'join') {

    }
    else {

    }
  })
}

module.exports = join;
