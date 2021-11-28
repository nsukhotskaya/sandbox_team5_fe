export const POST_FEEDBACK = {
  REQUEST: 'POST_FEEDBACK_REQUEST',
  SUCCESS: 'POST_FEEDBACK_SUCCESS',
  FAILURE: 'POST_FEEDBACK_FAILURE',
};

export const postFeedbackRequest = () => ({
  type: POST_FEEDBACK.REQUEST,
  payload: null,
});

export const postFeedbackSuccess = (data) => ({
  type: POST_FEEDBACK.SUCCESS,
  payload: { data },
});

export const postFeedbackFailure = (error) => ({
  type: POST_FEEDBACK.FAILURE,
  payload: { error },
});
