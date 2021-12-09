import { GET_EVALUATIONS_BY_FEEDBACK_ID } from '../actions';

const initialState = {
  candidateEvaluations: [],
  isLoading: false,
};

export default function candidateEvaluations(state = initialState, action) {
  switch (action.type) {
    case GET_EVALUATIONS_BY_FEEDBACK_ID.REQUEST:
      return { ...state, isLoading: true };
    case GET_EVALUATIONS_BY_FEEDBACK_ID.SUCCESS: {
      return {
        ...state,
        candidateEvaluations: action.payload.candidateEvaluations,
        isLoading: false,
      };
    }
    case GET_EVALUATIONS_BY_FEEDBACK_ID.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
