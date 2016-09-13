var should = require('should');
var mockTJapp = require('../mockTJapp')
var mock = mockTJapp.mock;
var app = mockTJapp.app;
var config = require('../config');
var request = require('supertest')(app);

describe('test mockTJapp.js', function() {
  it('should get mock ticket', function(done) {
    request.get('/getOneTicket')
      .end(function(err, res) {
        should.not.exists(err);
        res.text.should.equal(mock.ticket);
        done();
      })
  })

  it('should get ticket\'s sid', function(done) {
    request.get('/getSid')
      .query({
        ticket: mock.ticket,
        appId: config.appId,
        key: config.key,
        appSecret: config.appSecret
      })
      .end(function(err, res) {
        should.not.exists(err);
        res.body.result.should.equal(mock.sid);
        done();
      })
  })
})
