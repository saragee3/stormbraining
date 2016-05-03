import { combineReducers } from 'redux';
import BoardReducer from './board';
import AllBoardsReducer from './all_boards';

const rootReducer = combineReducers({
  board: BoardReducer,
  allBoards: AllBoardsReducer,
});

export default rootReducer;
