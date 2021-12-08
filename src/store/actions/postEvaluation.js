export const POST_EVALUATION = {
  REQUEST: 'POST_EVALUATION_REQUEST',
  SUCCESS: 'POST_EVALUATION_SUCCESS',
  FAILURE: 'POST_EVALUATION_FAILURE',
};

export const postEvaluationRequest = () => ({
  type: POST_EVALUATION.REQUEST,
  payload: null,
});

export const postEvaluationSuccess = () => ({
  type: POST_EVALUATION.SUCCESS,
  payload: null,
});

export const postEvaluationFailure = (error) => ({
  type: POST_EVALUATION.FAILURE,
  payload: { error },
});
