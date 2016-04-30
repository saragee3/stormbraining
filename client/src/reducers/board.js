import { NEW_BOARD } from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_BOARD:
      return [...state, action.payload];

    default:
      return state;
  }
}
