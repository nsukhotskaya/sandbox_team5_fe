export const GET_EVALUATIONS_BY_FEEDBACK_ID = {
  REQUEST: 'GET_EVALUATIONS_BY_FEEDBACK_ID_REQUEST',
  SUCCESS: 'GET_EVALUATIONS_BY_FEEDBACK_ID_SUCCESS',
  FAILURE: 'GET_EVALUATIONS_BY_FEEDBACK_ID_FAILURE',
};

export const getEvaluationsByFeedbackIdRequest = () => ({
  type: GET_EVALUATIONS_BY_FEEDBACK_ID.REQUEST,
  payload: null,
});

export const getEvaluationsByFeedbackIdSuccess = (data) => ({
  type: GET_EVALUATIONS_BY_FEEDBACK_ID.SUCCESS,
  payload: { candidateEvaluations: data },
});

export const getEvaluationsByFeedbackIdFailure = (error) => ({
  type: GET_EVALUATIONS_BY_FEEDBACK_ID.FAILURE,
  payload: { error },
});
