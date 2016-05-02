import chai, { expect } from 'chai';
import request from 'supertest';
import app from '../server.js';
import Board from '../models/Board.js';

describe('Brainstorm board interface', () => {

  beforeEach(() => {
    //  do some set-up here
  });

  describe('/api/boards', () => {
    describe('GET', () => {
      it('responds with a 200 (OK)', (done) => {
        request(app)
          .get('/api/boards')
          .expect(200, done);
      });
    });
  });
});
