var Event = require('../model').Event;
var Space = require('./Space');
var eventproxy = require('eventproxy');
var _ = require('lodash');

/* 内部取User尽量用 ObjectId (user_id), 少用sid */

/* 转换地点。原始数据可能是内置地点，可能是自定义地点 */
function mapSpace(event) {
  var ep = new eventproxy();

  ep.all('space', function(space) {
    if(space) {
      event.space = space.title;
      event.capacity = space.capacity;
      event.campus = space.campus;
    }
    else {
      /* if custome_space != null,
       * capacity & campus must be pre set
       */
      event.space = event.custom_space;
      /* no need to set capacity & campus */
    }
  })

  Space.getById(event.space_id, ep.done('space'));
}

exports.getRecent(config, cb) {
  Event.find({}, null, { skip: config.skip, limit: config.limit}, function(events) {
    events = events.map(mapSpace);
    cb(events);
  });
}

exports.getByAuthor(config, cb) {
  Event.find({ author_id: config.user_id },
    { skip: config.skip, limit: config.limit}, function(events) {
      events = events.map(mapSpace);
      cb(events);
    });
}

exports.getByMember(config, cb) {
  Event.find({ member_id: config.user_id },
    { skip: config.skip, limit: config.limit}, function(events) {
      events = events.map(mapSpace);
      cb(events);
    });
}

exports.getById(id, cb) {
  Event.find({ id: id }), function(event) {
    cb(mapSpace(event));
  });
}
