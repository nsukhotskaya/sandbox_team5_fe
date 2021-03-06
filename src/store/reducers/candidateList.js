import { GET_CANDIDATE_LIST } from '../actions';

const initialState = {
  candidates: [],
  isLoading: false,
};

export default function candidateList(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATE_LIST.REQUEST:
      return { candidates: [], isLoading: true };
    case GET_CANDIDATE_LIST.SUCCESS: {
      const { candidates } = action.payload;
      return {
        ...state,
        candidates,
        isLoading: false,
      };
    }
    case GET_CANDIDATE_LIST.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
