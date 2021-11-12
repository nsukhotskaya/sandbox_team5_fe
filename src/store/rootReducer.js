import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {
  isAuthorized, candidateList, internshipsList, candidateById,
} from './reducers';

const rootReducer = (history) => combineReducers({
  authorization: isAuthorized,
  candidates: candidateList,
  internships: internshipsList,
  candidate: candidateById,
  router: connectRouter(history),
});

export default rootReducer;
