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
  assignCandidates,
  stacksByInternshipIdList,
  allUsers,
  bestContactTime,
  setEventToCalendar,
  userInfoById,
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
    stacksByInternshipId: stacksByInternshipIdList,
    allUsers,
    contactTime: bestContactTime,
    calendarEvents: setEventToCalendar,
    searchResult: candidateSearch,
    loading: loadingReducer,
    authorization: isAuthorized,
    candidates: candidateList,
    internships: internshipsList,
    internship: internshipById,
    candidate: candidateById,
    userInfo: getUserInfo,
    assignUserCandidates: assignCandidates,
    user: userInfoById,
    router: connectRouter(history),
  });

export default rootReducer;
