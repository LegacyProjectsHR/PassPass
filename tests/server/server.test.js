var expect = require('chai').expect;
var supertest = require('supertest');
var path = require('path');
var server = require('../../server/index');

var superReq = supertest.agent(server);

describe('Server', function() {
  describe('GET Static Files', function () {
    it('should return the content of index.html', function (done) {
      // assume that if it contains a <input> tag in index.html
      superReq
        .get('/')
        .expect(200, /<input/, done);
    });

    it('should return the content of logged-in.html', function (done) {
      // assume that if it contains a <input> tag in index.html
      superReq
        .get('/logged-in.html')
        .expect(200, /<input/, done);
    });
  });



  xdescribe('Account Creation', function() {
    it('signup creates a new user record', function(done) {
      superReq
        .post('/signup')
        .type('form')
        .send({
          username: 'Cortin',
          password: 'Cortin'
        })
        .expect(201, function(err) {
          done(err);
        });
    });
  });
});
