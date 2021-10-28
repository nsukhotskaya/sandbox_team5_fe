const initialState = {
  isAuth: false,
  link: '/login',
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuth: action.isAuth, link: action.link };
    case 'LOGIN_FAILURE':
      return { ...state, isAuth: action.isAuth, link: action.link };
    case 'LOGIN_STARTED':
      return state;
    case 'LOGOUT_SUCCESS':
      return { ...state, isAuth: action.isAuth };
    default:
      return state;
  }
}
