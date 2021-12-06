import { GET_ALL_USERS } from '../actions';

const initialState = {
  allUsers: [],
  isLoading: false,
};

export default function allUsers(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS.REQUEST:
      return { ...state, isLoading: true };
    case GET_ALL_USERS.SUCCESS: {
      return { ...state, allUsers: action.payload.allUsers, isLoading: false };
    }
    case GET_ALL_USERS.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
