require('should');
var app = require('../app');
var request = require('supertest')(app);

describe('First test over /test', function() {
  it('should return \'hello\'', function(done) {
    request.get('/test')
      .end(function(err, res) {
        res.text.should.equal('hello');
        done();
      })
  })
})
