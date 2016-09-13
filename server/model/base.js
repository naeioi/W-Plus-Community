module.exports = function(schema) {
  schema.pre('save', function(nxt) {
    this.update_at = new Date();
  })
}
