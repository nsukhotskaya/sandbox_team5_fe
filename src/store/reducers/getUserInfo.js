import { GET_USER_INFO } from '../actions';

const initialState = {
  userInfo: [],
  isLoading: false,
};

export default function getUserInfo(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO.REQUEST:
      return { ...state, isLoading: true };
    case GET_USER_INFO.SUCCESS: {
      const { userInfo } = action.payload;
      return { ...state, userInfo, isLoading: false };
    }
    case GET_USER_INFO.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
