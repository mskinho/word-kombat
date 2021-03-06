const express = require('express');

const app = express();
const userController = require('../../controllers/user.controller');

app.use('/api/users', userController);

xdescribe("User Controller", () => {

  describe("GET api/users", () => {

    it("should have HTTP status 200", done => {
      request(app)
        .get('/api/users')
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
          done();
        });
    });

    it("should return json", done => {
      request(app)
        .get('/api/users')
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) throw err;
          done();
        });
    });

  });

});

