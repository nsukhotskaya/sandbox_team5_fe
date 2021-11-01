const initialState = {
  isAuthorized: false,
};

export default function isAuthorized(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN_STARTED':
      return state;
    case 'LOG_IN_SUCCESS':
      return { ...state, isAuthorized: action.isAuthorized };
    case 'LOG_IN_FAILURE':
      return { ...state, message: action.message };
    case 'LOG_OUT_SUCCESS':
      return { ...state, isAuthorized: action.isAuthorized };
    default:
      return state;
  }
}
