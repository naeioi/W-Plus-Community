var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Reply = new Schema({
  event_id: { type: ObjectId },
  author_id: { type: ObjectId },
  content: { type: String },
  create_at: { type: Date, default: Date.now }
})

Reply.index({ create_at: 1 });

module.exports = Reply;
