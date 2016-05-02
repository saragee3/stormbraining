import chai, { expect } from 'chai';
import request from 'supertest';
import app from '../server.js';
import Board from '../orm/models/Board.js';

describe('Brainstorm board interface', () => {

  beforeEach(() => {
    //  do some set-up here
  });

  describe('Boards', () => {
    describe('Board model', () => {
      it('Should exist', () => {
        expect(Board).to.exist;
      });
    });
  });
});
