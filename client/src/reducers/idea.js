import { NEW_IDEA } from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_IDEA:
      return [...state, action.payload];

    default:
      return state;
  }
}
