var Message = require('../model').Message;

exports.getByOwner = function(id, cb) {
  Message.find({ owner_id: id }, cb);
}
