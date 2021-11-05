const initialState = {
  candidates: [],
  isLoading: false,
};

export default function candidateList(state = initialState, action) {
  switch (action.type) {
    case 'GET_CANDIDATELIST_REQUEST':
      return { ...state, isLoading: true };
    case 'GET_CANDIDATELIST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        candidates: action.payload,
      };
    case 'GET_CANDIDATELIST_FAILURE':
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
