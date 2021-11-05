import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { isAuthorized, internshipsReducer } from './reducers';

const rootReducer = (history) =>
  combineReducers({
    authorization: isAuthorized,
    internships: internshipsReducer,
    router: connectRouter(history),
  });

export default rootReducer;
