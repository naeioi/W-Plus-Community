var Reply = require('../model/Reply');

exports.getById = function(id, cb) {
  Reply.find({ event_id: id }, cb);
}
