import { POST_CANDIDATES_BY_USER } from '../actions';

const initialState = {
  assignUserCandidates: [],
  isLoading: false,
};

export default function assignCandidates(state = initialState, action) {
  switch (action.type) {
    case POST_CANDIDATES_BY_USER.REQUEST:
      return { ...state, isLoading: true };
    case POST_CANDIDATES_BY_USER.SUCCESS: {
      const { assignUserCandidates } = action.payload;
      return { ...state, assignUserCandidates, isLoading: false };
    }
    case POST_CANDIDATES_BY_USER.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
