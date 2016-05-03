import expect from 'expect';
import reducer from '../../reducers/all_boards.js';
import * as types from '../../actions/index.js'

describe('all_boards reducer', () => {

  it ('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        title: '',
        ideas: [],
      });
  });

  it ('should handle NEW_BOARD', () => {



  });

  it ('should handle GET_BOARD', () => {



  });
});