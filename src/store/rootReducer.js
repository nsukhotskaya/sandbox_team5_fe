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
  candidateSearch,
  loadingReducer,
  candidateFeedbacks,
  englishLevels,
  candidateStatusTypes,
  allUsers,
} from './reducers';

const rootReducer = (history) =>
  combineReducers({
    candidateFeedbacks,
    stacks,
    locations,
    languages,
    skills,
    englishLevels,
    candidateStatusTypes,
    allUsers,
    searchResult: candidateSearch,
    loading: loadingReducer,
    authorization: isAuthorized,
    candidates: candidateList,
    internships: internshipsList,
    internship: internshipById,
    candidate: candidateById,
    userInfo: getUserInfo,
    router: connectRouter(history),
  });

export default rootReducer;
