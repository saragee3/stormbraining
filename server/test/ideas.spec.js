import chai, { expect } from 'chai';
import request from 'supertest';
import app from '../server.js';
import Idea from '../orm/models/Idea.js';

describe('Brainstorm board interface', () => {

  beforeEach(() => {
    //  do some set-up here
  });

  describe('idea things', () => {
    describe('Idea model', () => {
      it('should exist', () => {
        expect(Idea).to.exist;
        //  do things here.
      });
    });
  });
});
