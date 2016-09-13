var Event = require('../proxy/Event');
var Message = require('../proxy/Message');

var my = function(req, res, next) {
  var ep = new eventproxy();

  ep.all('reserves', 'tickets', 'favos', 'messages',
      function(reserves, tickets, favos, messages) {
        res.send({
          reserves: reserves,
          tickets: tickets,
          favos: favos,
          messages: messages
        })
      })

  var user_id = req.session.user.id;

  /* Ticket {
      id: ObjectId,
      start_time: Date,
      end_time: Date,
      space: String }
   */
  ep.all('preTickets', function(events) {
    events = events.filter(function(e) {
      return e.accepted;
    })
    events.map(function(e) {
      return _.pick(e, ['id', 'start_time', 'end_time', 'space'])
    })
    ep.emit('tickets', events);
  })

  Event.getReserve(user_id, cb, ep.done('reserves'));
  Event.getByMember({
    member_id: user_id,
    skip: 0, limit: 100,
  }, ep.done('preTickets'));
  Message.getByOwner(user_id, ep.done('message'));

  ep.emit('favos', req.session.user.favos);
}

module.exports = my;
