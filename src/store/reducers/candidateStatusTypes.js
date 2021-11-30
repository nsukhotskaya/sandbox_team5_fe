import { GET_CANDIDATE_STATUS_TYPE } from '../actions';

const initialState = {
  englishLevels: [],
  isLoading: false,
};

export default function candidateStatusTypes(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATE_STATUS_TYPE.REQUEST:
      return { ...state, isLoading: true };
    case GET_CANDIDATE_STATUS_TYPE.SUCCESS: {
      return {
        ...state,
        candidateStatusTypes: action.payload.candidateStatusTypes,
        isLoading: false,
      };
    }
    case GET_CANDIDATE_STATUS_TYPE.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}