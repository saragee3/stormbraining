import { combineReducers } from 'redux';
import PostReducer from './idea';
import BoardReducer from './board';

const rootReducer = combineReducers({
  ideas: PostReducer,
  boards: BoardReducer,
});

export default rootReducer;
