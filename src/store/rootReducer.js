import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { isAuthorized, candidateList, internshipsList } from './reducers';

const rootReducer = (history) => combineReducers({
  authorization: isAuthorized,
  candidates: candidateList,
  internships: internshipsList,
  router: connectRouter(history),
});

export default rootReducer;
