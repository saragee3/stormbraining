import expect from 'expect';
import nock from 'nock';
import * as actions from '../../actions/index.js';
import * as types from '../../actions/action_types';

const ROOT_URL = '/api';

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  const board = {
    id: 1,
    title: 'Board 1',
    ideas: [
      {
        id: 1,
        content: 'This is an existing idea!',
        upvotes: 4,
        boardId: 1,
        createdAt: new Date(),
      },
      {
        id: 2,
        content: 'This is another idea!',
        upvotes: 10,
        boardId: 2,
        createdAt: new Date(),
      },
    ],
  };

  const boards = [
    board,
    { id: 2, title: 'Board 2', ideas: [] },
    { id: 3, title: 'Board 3', ideas: [] },
  ];

  it('should create action GET_BOARDS when finished retrieving boards', () => {
    nock(ROOT_URL)
      .get('/boards')
      .reply(200, { data: { boards } });

    const expectedAction = {
      type: types.GET_BOARDS,
      payload: { data: { boards } },
    };
    const getBoardsAction = actions.getBoards();

    expect(getBoardsAction.type).toEqual(expectedAction.type);
    getBoardsAction.payload.then(payload => {
      expect(payload).toEqual(expectedAction.payload);
    });
  });

  it('should create action GET_ONE_BOARD when finished retrieving a board', () => {
    nock(ROOT_URL)
      .get(`/boards/${board.id}`)
      .reply(200, { data: { board } });

    const expectedAction = {
      type: types.GET_ONE_BOARD,
      payload: { data: { board } },
    };
    const getOneBoardAction = actions.getOneBoard(board.id);

    expect(getOneBoardAction.type).toEqual(expectedAction.type);
    getOneBoardAction.payload.then(payload => {
      expect(payload).toEqual(expectedAction.payload);
    });
  });

  it('should create action NEW_BOARD when finished creating new board', () => {
    const newBoard = { id: 4, title: 'Board 4', ideas: [] };
    nock(ROOT_URL)
      .post('/boards', { title: newBoard.title })
      .reply(201, { data: { board: newBoard } });

    const expectedAction = {
      type: types.NEW_BOARD,
      payload: { data: { board: newBoard } },
    };
    const newBoardAction = actions.newBoard(newBoard.title);

    expect(newBoardAction.type).toEqual(expectedAction.type);
    newBoardAction.payload.then(payload => {
      expect(payload).toEqual(expectedAction.payload);
    });
  });
});
