var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Space = new Schema({
  campus: { type: String },
  title: { type: String },
  description: { type: String },
  capacity: { type: Number },
})

module.exports = Space;
