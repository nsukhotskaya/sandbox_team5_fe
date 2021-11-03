import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { isAuthorized } from './reducers';

const rootReducer = (history) =>
  combineReducers({
    authorization: isAuthorized,
    router: connectRouter(history),
  });

export default rootReducer;
