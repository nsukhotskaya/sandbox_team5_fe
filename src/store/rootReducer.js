import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {
  isAuthorized,
  candidateList,
  internshipsList,
  internshipById,
  candidateById,
  locations,
  stacks,
  languages,
  getUserInfo,
  skills,
} from './reducers';

const rootReducer = (history) => combineReducers({
  stacks,
  locations,
  languages,
  skills,
  authorization: isAuthorized,
  candidates: candidateList,
  internships: internshipsList,
  internship: internshipById,
  candidate: candidateById,
  userInfo: getUserInfo,
  router: connectRouter(history),
});

export default rootReducer;
