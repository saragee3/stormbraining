import expect from 'expect';
import nock from 'nock';
import * as actions from '../../actions/index.js';
import * as types from '../../actions/action_types';

const ROOT_URL = '/api';

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create action GET_BOARDS when finished retrieving boards', () => {
    const boards = [
      { title: 'Board 1', ideas: [] },
      { title: 'Board 2', ideas: [] },
      { title: 'Board 3', ideas: [] },
    ];

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
    const board = {
      id: 13,
      title: 'Board 1',
      ideas: [
        {
          id: 0,
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
    const id = 13;

    nock(ROOT_URL)
      .get(`/boards/${id}`)
      .reply(200, { data: { board } });

    const expectedAction = {
      type: types.GET_ONE_BOARD,
      payload: { data: { board } },
    };
    const getOneBoardAction = actions.getOneBoard(id);

    expect(getOneBoardAction.type).toEqual(expectedAction.type);
    getOneBoardAction.payload.then(payload => {
      expect(payload).toEqual(expectedAction.payload);
    });
  });

  it('should create action NEW_BOARD when finished creating new board', () => {
    const board = { title: 'Board 1', ideas: [] };
    nock(ROOT_URL)
      .post('/boards', { title: board.title })
      .reply(201, { data: { board } });

    const expectedAction = {
      type: types.NEW_BOARD,
      payload: { data: { board } },
    };
    const newBoardAction = actions.newBoard();

    expect(newBoardAction.type).toEqual(expectedAction.type);
    newBoardAction.payload.then(payload => {
      expect(payload).toEqual(expectedAction.payload);
    });
  });

  it('should create action GET_ONE_IDEA when finished retrieving an idea', () => {
    const idea = {
      id: 3,
      content: 'This is an idea!',
      upvotes: 6,
      boardId: 4,
      createdAt: new Date(),
    };
    const id = 13;

    nock(ROOT_URL)
      .get(`/boards/${id}/ideas/${idea.id}`)
      .reply(200, { data: { idea } });

    const expectedAction = {
      type: types.GET_ONE_IDEA,
      payload: { data: { idea } },
    };
    const getOneIdeaAction = actions.getOneIdea(id, idea.id);

    expect(getOneIdeaAction.type).toEqual(expectedAction.type);
    getOneIdeaAction.payload.then(payload => {
      expect(payload).toEqual(expectedAction.payload);
    });
  });

  it('should create action NEW_IDEA when finished creating new idea', () => {
    const newIdea = {
      id: 1,
      content: 'This is a new idea!',
      upvotes: 0,
      boardId: 1,
      createdAt: new Date(),
    };
    const boardId = 6;

    nock(ROOT_URL)
      .post(`/boards/${boardId}`, { content: newIdea.content })
      .reply(201, { data: { idea: newIdea } });

    const expectedAction = {
      type: types.NEW_IDEA,
      payload: { data: { idea: newIdea } },
    };
    const newIdeaAction = actions.newIdea(newIdea.content, boardId);

    expect(newIdeaAction.type).toEqual(expectedAction.type);
    newIdeaAction.payload.then(payload => {
      expect(payload).toEqual(expectedAction.payload);
    });
  });
});
