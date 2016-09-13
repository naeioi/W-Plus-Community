var Space = require('../model').Space;

exports.getById = function(id, cb) {
  Space.findOne({ id: id }, cb);
}
