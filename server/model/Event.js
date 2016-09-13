var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var base = require('./base');
var ObjectId = Schema.ObjectId;

var Event = new Schema({
  accepted: { type: Boolean },
  title: { type: String },
  content: { type: String },

  space_id: { type: ObjectId },
  custom_space: { type: String }, /* null if not custom */
  capacity: { type: Number }, /* null if not custom */
  campus: { type: String }, /* Siping vs. Jiading */

  start_time: { type: Date },
  end_time: { type: Date },
  author_id: { type: ObjectId },
  members_id: [ObjectId],
  reply_id: { type: ObjectId },
  pics_url: [String], /* pics id as filename */
  create_at: { type: Date },
  update_at: { type: Date },
  last_reply_at: { type: Date }
})

//Event.plugin(base);
Event.index({ create_at: -1 });
Event.index({ update_at: -1 });
Event.index({ last_reply_at: -1 });

module.exports = Event;
