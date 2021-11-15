import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {
  isAuthorized,
  candidateList,
  internshipsList,
  internshipById,
  candidateById,
  getUserInfo,
} from './reducers';

const rootReducer = (history) => combineReducers({
  authorization: isAuthorized,
  candidates: candidateList,
  internships: internshipsList,
  internship: internshipById,
  candidate: candidateById,
  userInfo: getUserInfo,
  router: connectRouter(history),
});

export default rootReducer;
