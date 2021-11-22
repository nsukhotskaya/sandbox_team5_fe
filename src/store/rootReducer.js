import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {
  isAuthorized,
  candidateList,
  internshipsList,
  internshipById,
  candidateById,
  locations,
  getUserInfo,
  skills,
  candidateSearch,
} from './reducers';

const rootReducer = (history) => combineReducers({
  locations,
  skills,
  authorization: isAuthorized,
  candidates: candidateList,
  internships: internshipsList,
  internship: internshipById,
  candidate: candidateById,
  userInfo: getUserInfo,
  searchResult: candidateSearch,
  router: connectRouter(history),
});

export default rootReducer;
