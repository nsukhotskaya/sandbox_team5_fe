import { GET_CANDIDATE_LIST } from '../commands/types';

const initialState = {
  candidates: [],
  isLoading: false,
};

export default function candidateList(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATE_LIST.REQUEST:
      return { ...state, isLoading: true };
    case GET_CANDIDATE_LIST.SUCCESS:
      return {
        ...state,
        candidates: action.payload,
        isLoading: false,
      };
    case GET_CANDIDATE_LIST.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
