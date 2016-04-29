import { combineReducers } from 'redux';
import PostReducer from './idea';

const rootReducer = combineReducers({
  ideas: PostReducer,
});

export default rootReducer;
