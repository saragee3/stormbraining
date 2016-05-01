import { NEW_BOARD, GET_BOARDS, GET_ONE_BOARD } from '../actions/index';

const INITIAL_STATE = { all: [], board: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_BOARD:
      const allBoards = state.all.concat(action.payload.data.board);
      return { ...state, all: allBoards };
    case GET_BOARDS:
      return { ...state, all: action.payload.data.boards };
    case GET_ONE_BOARD:
      return { ...state, board: action.payload.data.board };
    default:
      return state;
  }
}
