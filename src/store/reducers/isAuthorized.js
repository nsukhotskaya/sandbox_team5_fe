const initialState = localStorage.accessToken
  ? { isAuthorized: true }
  : { isAuthorized: false };

export default function isAuthorized(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return state;
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthorized: action.isAuthorized };
    case 'LOGIN_FAILURE':
      return state;
    case 'LOGOUT_SUCCESS':
      return { ...state, isAuthorized: action.isAuthorized };
    default:
      return state;
  }
}
