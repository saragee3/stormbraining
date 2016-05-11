import { GET_USER, NEW_BOARD, DELETE_BOARD } from '../actions/action_types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload.data.user;

    case NEW_BOARD:
      const newBoards = [...state.authoredBoards, action.payload.data.board];
      return { ...state, authoredBoards: newBoards };

    case DELETE_BOARD:
      console.log(action.payload);
      const idToDelete = action.payload.data.board.id;
      const remainingBoards = state.authoredBoards.filter((board) => board.id !== idToDelete);
      return { ...state, authoredBoards: remainingBoards };

    default:
      return state;
  }

}
