import chai, { expect } from 'chai';
import request from 'supertest';
import app from '../server.js';
import Idea from '../orm/models/Idea.js';

describe('Brainstorm board interface', () => {

  beforeEach(() => {
    //  do some set-up here
  });

  describe('idea things', () => {
    describe('a function', () => {
      it('does some things', () => {
        expect(Idea).to.exist();
        //  do things here.
      });
    });
  });
});
