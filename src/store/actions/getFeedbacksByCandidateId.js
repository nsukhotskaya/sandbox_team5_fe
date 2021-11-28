export const GET_FEEDBACKS_BY_CANDIDATE_ID = {
  REQUEST: 'GET_FEEDBACKS_BY_CANDIDATE_ID_REQUEST',
  SUCCESS: 'GET_FEEDBACKS_BY_CANDIDATE_ID_SUCCESS',
  FAILURE: 'GET_FEEDBACKS_BY_CANDIDATE_ID_FAILURE',
};

export const getFeedbacksByCandidateIdRequest = () => ({
  type: GET_FEEDBACKS_BY_CANDIDATE_ID.REQUEST,
  payload: null,
});

export const getFeedbacksByCandidateIdSuccess = (data) => ({
  type: GET_FEEDBACKS_BY_CANDIDATE_ID.SUCCESS,
  payload: { candidateFeedbacks: data },
});

export const getFeedbacksByCandidateIdFailure = (error) => ({
  type: GET_FEEDBACKS_BY_CANDIDATE_ID.FAILURE,
  payload: { error },
});
