import { GET_CANDIDATE_STATUS_TYPES } from '../actions';

const initialState = {
  candidateStatusTypes: [],
  isLoading: false,
};

export default function candidateStatusTypes(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATE_STATUS_TYPES.REQUEST:
      return { ...state, isLoading: true };
    case GET_CANDIDATE_STATUS_TYPES.SUCCESS:
      return {
        ...state,
        candidateStatusTypes: action.payload.candidateStatusTypes,
        isLoading: false,
      };
    case GET_CANDIDATE_STATUS_TYPES.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
