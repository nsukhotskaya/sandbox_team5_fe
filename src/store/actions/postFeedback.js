export const POST_FEEDBACK = {
  REQUEST: 'POST_FEEDBACK_REQUEST',
  SUCCESS: 'POST_FEEDBACK_SUCCESS',
  FAILURE: 'POST_FEEDBACK_FAILURE',
};

export const postFeedbackRequest = () => ({
  type: POST_FEEDBACK.REQUEST,
  payload: null,
});

export const postFeedbackSuccess = () => ({
  type: POST_FEEDBACK.SUCCESS,
  payload: null,
});

export const postFeedbackFailure = (error) => ({
  type: POST_FEEDBACK.FAILURE,
  payload: { error },
});
