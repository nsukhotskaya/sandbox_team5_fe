const initialState = {
  isAuthorized: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_STARTED':
      return { ...state };
    case 'LOGIN_SUCCESS':
      console.log('success');
      return { ...state, isAuthorized: action.isAuthorized };
    case 'LOGIN_FAILURE':
      return { ...state, message: action.message };
    case 'LOGOUT_SUCCESS':
      return { ...state, isAuthorized: action.isAuthorized };
    default:
      return state;
  }
}
