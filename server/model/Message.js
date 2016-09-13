var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Message = new Schema({
  // type: enum {
  //   "EventApplicationPass",
  //   "EventMemberApply",
  //   "ReceiveEventComment",
  //   "ReceiveCommentReply"
  // },
  type: { type: String },
  owner_id: { type: ObjectId },
  content: { type: String },
  create_at: { type: Date, defalut: Date.now }
});

Message.index({ create_at: -1 });

module.exports = Message;
