import { combineReducers } from 'redux';
import { isAuthorized } from './reducers';

const rootReducer = combineReducers({
  authorization: isAuthorized,
});

export default rootReducer;
