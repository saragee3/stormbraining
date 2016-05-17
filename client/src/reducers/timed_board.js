import * as types from '../actions/action_types';

const INITIAL_STATE = {
  id: '',
  title: '',
  ideas: [],
  authorId: '',
  boardId: '',
  timerLength: 0,
  createdAt: '',
  isLoading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_TIMED_BOARD_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_TIMED_BOARD_SUCCESS:
      return { ...action.payload, isLoading: false };

    case types.GET_TIMED_BOARD_ERROR:
      return { ...state, isLoading: false };

    case types.NEW_TIMED_IDEA:
      return { ...state, ideas: [...state.ideas, action.payload.idea] };

    case types.UPDATE_TIMED_IDEA:
      const toggledIdeas = state.ideas.map(idea => {
        return idea.id === action.payload.idea.id ? action.payload.idea : idea;
      });
      return { ...state, ideas: toggledIdeas };

    case types.DELETE_TIMED_IDEA:
      const filteredIdeas = state.ideas.filter(idea => idea.id !== action.payload.idea.id);
      return { ...state, ideas: filteredIdeas };

    case types.CLEAR_TIMED_BOARD_VIEW:
      return INITIAL_STATE;

    case types.SHUFFLE_TIMED_IDEAS:
      let i = 0;
      let j = 0;
      let temp = null;
      const arrayRandom = state.ideas.slice();

      for (i = arrayRandom.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arrayRandom[i];
        arrayRandom[i] = arrayRandom[j];
        arrayRandom[j] = temp;
      }

      return { ...state, ideas: arrayRandom };

    case types.SORT_TIMED_IDEAS_BY_CONTENT:
      const arrayByContent = state.ideas.slice();
      const orderContent = action.order;

      arrayByContent.sort((a, b) => {
        const strA = a.content.toLowerCase();
        const strB = b.content.toLowerCase();
        if (orderContent === 1) { return strA > strB ? 1 : -1; }
        if (orderContent === 2) { return strA < strB ? 1 : -1; }
        return new Date(a.createdAt) - new Date(b.createdAt);
      });

      return { ...state, ideas: arrayByContent };

    case types.SORT_TIMED_IDEAS_BY_TIME:
      const arrayByTime = state.ideas.slice();
      const orderTime = action.order;

      arrayByTime.sort((a, b) => {
        if (orderTime === 1) { return new Date(b.createdAt) - new Date(a.createdAt); }
        if (orderTime === 0) { return new Date(a.createdAt) - new Date(b.createdAt); }
      });

      return { ...state, ideas: arrayByTime };

    default:
      return state;
  }
}
