import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { isAuthorized, candidateList } from './reducers';

const rootReducer = (history) => combineReducers({
  authorization: isAuthorized,
  candidates: candidateList,
  router: connectRouter(history),
});

export default rootReducer;
