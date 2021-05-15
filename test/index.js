const expect = require('chai').expect;
const request = require('request');

const urlBase = "http://localhost:5000/";

describe('Db stored users API', () => {

  describe('Get user by ID', () => {

    const user = {};

    const url = urlBase + "/users/1";

    it('returns status 200', () => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
      })
    })

    it('returns user', () => {
      request(url, (error, response, body) => {
        expect(body).to.equal({});
      })
    })

  })

})