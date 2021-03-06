import * as types from '../actions/action_types';

const INITIAL_STATE = { email: '', id: '', name: '', authoredBoards: [], boards: [], timedBoards: [], isLoading: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_USER_SUCCESS:
      return { ...action.payload, isLoading: false };

    case types.GET_USER_ERROR:
      return { ...state, isLoading: true };

    case types.NEW_BOARD:
      const newBoards = [...state.authoredBoards, action.payload.data.board];
      return { ...state, authoredBoards: newBoards };

    case types.DELETE_BOARD:
      const idToDelete = action.payload.data.board.id;
      const remainingBoards = state.authoredBoards.filter((board) => board.id !== idToDelete);
      return { ...state, authoredBoards: remainingBoards };

    case types.DELETE_TIMED_BOARD:
      const id = action.payload.data.board.id;
      const remaining = state.timedBoards.filter((board) => board.id !== id);
      return { ...state, timedBoards: remaining };

    default:
      return state;
  }

}
