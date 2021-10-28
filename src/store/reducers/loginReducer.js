const initialState = {
  isAuth: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isAuth: action.payload,
      };
    default:
      return state;
  }
}
