var Reply = require('../model/Reply');

exports.getById = function(id, cb) {
  Reply.findOne({ event_id: id }, cb);
}
