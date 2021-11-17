import { GET_CANDIDATE_LIST, UPDATE_CANDIDATE_STATUS } from '../actions';

const initialState = {
  candidates: [],
  isLoading: false,
};

export default function candidateList(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATE_LIST.REQUEST:
      return { ...state, isLoading: true };
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
    case UPDATE_CANDIDATE_STATUS.SUCCESS: {
      return {
        ...state,
        candidates: state.candidates.map((candidate) => {
          if (candidate.id !== action.candidateId) {
            return candidate;
          }
          return {
            ...candidate,
            statusType: action.statusType,
          };
        }),
      };
    }
    default:
      return state;
  }
}

// export const changeCandidateStatusAC = (status, candidateId) => ({
//   type: UPDATE_CANDIDATE_STATUS,
//   status,
//   candidateId,
// });
