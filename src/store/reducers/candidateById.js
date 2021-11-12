import { GET_CANDIDATE } from '../actions';

const initialState = {
  candidate: [],
  isLoading: false,
};

export default function candidateById(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATE.REQUEST:
      return { ...state, isLoading: true };
    case GET_CANDIDATE.SUCCESS: {
      const { candidate } = action.payload;
      return {
        ...state,
        candidate,
        isLoading: false,
      };
    }
    case GET_CANDIDATE.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
