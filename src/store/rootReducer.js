import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {
  isAuthorized,
  candidateList,
  internshipsList,
  internshipById,
  candidateById,
  locations,
} from './reducers';

const rootReducer = (history) => combineReducers({
  authorization: isAuthorized,
  candidates: candidateList,
  internships: internshipsList,
  locations,
  internship: internshipById,
  candidate: candidateById,
  router: connectRouter(history),
});

export default rootReducer;
