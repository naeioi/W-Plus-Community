var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  sid: { type: String },
  email: { type: String },
  avatar: { type: String },
  favos: [ObjectId], /* favo events id */
  create_at: { type: Date, default: Date.now }
})

module.exports = User;
