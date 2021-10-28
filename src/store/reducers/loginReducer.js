const initialState = {
  isAuth: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_STARTED':
      return { ...state };
    case 'LOGIN_SUCCESS':
      return { ...state, isAuth: action.isAuth };
    case 'LOGIN_FAILURE':
      return { ...state, message: action.message };
    case 'LOGOUT_SUCCESS':
      return { ...state, isAuth: action.isAuth };
    default:
      return state;
  }
}
