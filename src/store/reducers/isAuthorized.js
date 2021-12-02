import { USER_LOGIN, USER_LOGOUT } from '../actions';

const initialState = localStorage.accessToken
  ? { isAuthorized: true }
  : { isAuthorized: false };

export default function isAuthorized(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN.REQUEST:
      return state;
    case USER_LOGIN.SUCCESS:
      return { ...state, isAuthorized: true };
    case USER_LOGIN.FAILURE:
      return { ...state, error: action.payload };
    case USER_LOGOUT.SUCCESS:
      return { ...state, isAuthorized: false };
    default:
      return state;
  }
}
