import {
  NEW_IDEA,
  GET_ONE_BOARD,
  UP_VOTE,
  CLEAR_BOARD_VIEW,
  REFRESH_BOARD_VIEW,
} from '../actions/action_types';

const INITIAL_STATE = { title: '', ideas: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_IDEA:
      return state;

    case GET_ONE_BOARD:
      return action.payload.data.board;

    case UP_VOTE:
      return state;

    case CLEAR_BOARD_VIEW:
      return INITIAL_STATE;

    case REFRESH_BOARD_VIEW:
      const changedIdea = action.payload;
      let indexOfUpdate = state.ideas.map(idea => idea.id).indexOf(changedIdea.id);
      // to handle new ideas, a case for when indexOfUpdate === -1
      indexOfUpdate < 0 ? indexOfUpdate = state.ideas.length : indexOfUpdate = indexOfUpdate;
      const updatedIdeas = state.ideas.slice();
      updatedIdeas.splice(indexOfUpdate, 1, changedIdea);
      return { ...state, ideas: updatedIdeas };

    default:
      return state;
  }
}
