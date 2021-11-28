import { GET_FEEDBACKS_BY_CANDIDATE_ID } from '../actions';

const initialState = {
  candidateFeedbacks: [],
  isLoading: false,
};

export default function candidateFeedbacks(state = initialState, action) {
  switch (action.type) {
    case GET_FEEDBACKS_BY_CANDIDATE_ID.REQUEST:
      return { ...state, isLoading: true };
    case GET_FEEDBACKS_BY_CANDIDATE_ID.SUCCESS: {
      return { ...state, candidateFeedbacks: action.payload.candidateFeedbacks, isLoading: false };
    }
    case GET_FEEDBACKS_BY_CANDIDATE_ID.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
