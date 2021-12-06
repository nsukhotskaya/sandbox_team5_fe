import { GET_USER_INFO_BY_ID } from '../actions';

const initialState = {
  user: [],
  isLoading: false,
};

export default function internshipById(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO_BY_ID.REQUEST:
      return { ...state, isLoading: true };
    case GET_USER_INFO_BY_ID.SUCCESS: {
      const { user } = action.payload;
      return { ...state, user, isLoading: false };
    }
    case GET_USER_INFO_BY_ID.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
