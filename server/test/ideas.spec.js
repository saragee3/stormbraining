import { expect } from 'chai';
import request from 'supertest';
import Idea from '../orm/models/Idea';
const server = request.agent('http://localhost:3000');

describe('Ideas:', () => {

  const testIdeaRequest = { content: 'My great idea' };
  let testBoard = {};
  const testUser = { name: 'Fred', id: 48 };

  beforeEach((done) => {
    server
      .post('/api/boards')
      .send({ title: 'My test board' })
      .end((err, res) => {
        testBoard = res.body.board;
        done();
      });
  });

  afterEach((done) => {
    server
      .delete(`/api/boards/${testBoard.id}`)
      .end(() => {
        done();
      })
  });

  describe('Idea model', () => {
    it('Should exist', () => {
      expect(Idea).to.exist;
      //  test more things here.
    });
  });

  describe('Idea API', () => {
    describe('POST a new idea', () => {
      it('should respond with a 201 created status', (done) => {
        server
          .post(`/api/boards/${testBoard.id}/ideas`)
          .send(testIdeaRequest)
          .expect(201, done);
      });
    });
    describe('Get all ideas for a board', () => {
      it('Should respond with a 200 OK status', (done) => {
        server
          .get(`/api/boards/${testBoard.id}`)
          .expect(200, done);
      });
      it('should contain created ideas', (done) => {
        server
          .post(`/api/boards/${testBoard.id}/ideas`)
          .send(testIdeaRequest)
          .end(() => {
            server
              .get(`/api/boards/${testBoard.id}`)
              .end((err, res) => {
                expect(res.body.board.ideas.length).to.equal(1);
                done();
              });
          });
      });
    });
    describe('Upvote idea', (done) => {
      xit('should allow a user to upvote an idea', () => {
        server
          .post(`/api/boards/${testBoard.id}/ideas`)
          .send(testIdeaRequest)
          .end((err, res) => {
            const idea = res.body.idea;
            //  write a test here to allow a user to upvote
            done();
          });
      });
      xit('should only allow a user to upvote an idea once', () => {
        server
          .post(`/api/boards/${testBoard.id}/ideas`)
          .send(testIdeaRequest)
          .end((err, res) => {
            const idea = res.body.idea;
            //  write a test here to make sure they can't upvote twice...
            done();
          });
      });
    });
    describe('Un-upvote idea', () => {
      xit('should allow a user to remove their upvote', (done) => {
        server
          .post(`/api/boards/${testBoard.id}/ideas`)
          .send(testIdeaRequest)
          .end((err, res) => {
            const idea = res.body.idea;
            //  upvote an idea and then try to un-upvote it...
            done();
          });
      });
      xit('should not allow a user to remove other upvotes', (done) => {
        server
          .post(`/api/boards/${testBoard.id}/ideas`)
          .send(testIdeaRequest)
          .end((err, res) => {
            const idea = res.body.idea;
            //  upvote an idea and then try to un-upvote it twice...
            done();
          });
      });
    });
    describe('Delete idea', () => {
      it('should remove ideas from the database', (done) => {
        server
        .post(`/api/boards/${testBoard.id}/ideas`)
        .send(testIdeaRequest)
        .end((err, res) => {
          const idea = res.body.idea;
          server
          .delete(`/api/boards/${testBoard.id}/ideas/${idea.id}`)
          .expect(204, done);
        });
      });
    });
    describe('Update idea', () => {
      it('should allow an idea to be renamed', (done) => {
        server
        .post(`/api/boards/${testBoard.id}/ideas`)
        .send(testIdeaRequest)
        .end((err, res) => {
          const idea = res.body.idea;
          server
          .put(`/api/boards/${testBoard.id}/ideas/${idea.id}`)
          .send({ content: 'My even better idea' })
          .end((error, response) => {
            expect(response.body.result.content).to.equal('My even better idea');
            done();
          });
        });
      });
    });
  });
});
