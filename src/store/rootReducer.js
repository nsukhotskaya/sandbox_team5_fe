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
  loadingReducer,
} from './reducers';

const rootReducer = (history) =>
  combineReducers({
    loading: loadingReducer,
    locations,
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
