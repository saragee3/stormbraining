import { NEW_IDEA, GET_ONE_BOARD } from '../actions/index';

const INITIAL_STATE = { title: '', ideas: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_IDEA:
      const allIdeas = state.ideas.concat(action.payload.data.idea);
      return { ...state, ideas: allIdeas };

    case GET_ONE_BOARD:
      return action.payload.data.board;

    default:
      return state;
  }
}
