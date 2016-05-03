import chai, { expect } from 'chai';
import request from 'supertest';
import app from '../server.js';
import thinky from '../orm/thinkyConfig.js';
import Board from '../orm/models/Board.js';

describe('Brainstorm board interface', () => {

  describe('Boards', () => {
    describe('Board model', () => {

      it('Should exist', () => {
        expect(Board).to.exist;
      });
    });
  });
});

const server = request.agent('http://localhost:3000');

describe('Brainstorm board interface', () => {

  let title;
  let id;

  describe('API /boards', () => {
    before((done) => {
      done();
    });

    it('Should GET all boards', (done) => {
      server
        .get('/api/boards')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('Should POST a board', (done) => {
      const postTitle = { title: 'new board' };
      server
        .post('/api/boards')
        .send(postTitle)
        .expect((res) => {
          title = res.body.board.title;
          id = res.body.board.id;
        })
        .expect(201, done);
    });

    it('Should get GET a board', (done) => {
      server
        .get(`/api/boards/${id}`)
        .expect('Content-Type', /json/)
        .expect(/new board.*/)
        .expect(200, done);
    });

    it('Should UPDATE a board', (done) => {
      const titleEdit = { title: 'New Board' };
      server
        .put(`/api/boards/${id}`)
        .send(titleEdit)
        .expect('Content-Type', /json/)
        .expect(/New Board.*/)
        .expect(200, done);
    });

    it('Should DELETE a board', (done) => {
      server
        .del(`/api/boards/${id}`)
        .expect(204, done);
    });
  });

});

