var User = require('../model').User

exports.getBySid = function(sid, cb) {
  User.findOne({ sid: sid }, cb);
}

exports.createNewUser = function(sid, cb) {
  var user = new User({sid: sid});
  user.save(function(err, user) {
    cb(err, user);
  })
}
