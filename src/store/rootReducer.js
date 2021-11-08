import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { isAuthorized, candidateList, internshipsReducer } from './reducers';

const rootReducer = (history) => combineReducers({
  authorization: isAuthorized,
  candidates: candidateList,
  internships: internshipsReducer,
  router: connectRouter(history),
});

export default rootReducer;
