import { GET_CANDIDATE_SEARCH } from '../actions';

const initialState = {
  searchResult: [],
  isLoading: false,
};

export default function candidateList(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATE_SEARCH.REQUEST:
      return { ...state, isLoading: true };
    case GET_CANDIDATE_SEARCH.SUCCESS: {
      const { searchResult } = action.payload;
      return {
        ...state,
        searchResult,
        isLoading: false,
      };
    }
    case GET_CANDIDATE_SEARCH.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}