var Space = require('../model').Space;

exports.getById = function(id, cb) {
  Space.findOne({ _id: id }, cb);
}
