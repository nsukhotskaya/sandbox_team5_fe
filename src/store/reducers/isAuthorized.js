import { LOGIN, LOGOUT } from '../commands/types';

const initialState = {
  isAuthorized: false,
};

export default function isAuthorized(state = initialState, action) {
  switch (action.type) {
    case LOGIN.REQUEST:
      return state;
    case LOGIN.SUCCESS:
      return { ...state, isAuthorized: true };
    case LOGIN.FAILURE:
      return state;
    case LOGOUT.SUCCESS:
      return { ...state, isAuthorized: false };
    default:
      return state;
  }
}
