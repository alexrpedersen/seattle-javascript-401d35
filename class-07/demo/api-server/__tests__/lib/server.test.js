'use strict';

const { server } = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('API Server:', () => {
  it('should respond with a 500 if there is an error', () => {
    return mockRequest.get('/bad-route')
      .then(results => {
        expect(results.status).toBe(500);
      });
  });

  it('GET: /fruit/:type/:name', () => {
    return mockRequest.get('/fruit/apple/cosmic')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body).toEqual({ type: 'apple', name: 'cosmic' });
      })
  });

  it('POST: /fruit', () => {
    return mockRequest.post('/fruit')
      .send({ name: 'apple' })
      .then(results => {
        expect(results.status).toBe(201);
        // testing DB CRUD here as well in the future
      });
  });
});