import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { isAuthorized, internshipsReducer, candidateList } from './reducers';

const rootReducer = (history) => combineReducers({
  authorization: isAuthorized,
  internships: internshipsReducer,
  candidates: candidateList,
  router: connectRouter(history),
});

export default rootReducer;
