export const PUT_FEEDBACK = {
  REQUEST: 'PUT_FEEDBACK_REQUEST',
  SUCCESS: 'PUT_FEEDBACK_SUCCESS',
  FAILURE: 'PUT_FEEDBACK_FAILURE',
};

export const putFeedbackRequest = () => ({
  type: PUT_FEEDBACK.REQUEST,
  payload: null,
});

export const putFeedbackSuccess = (data) => ({
  type: PUT_FEEDBACK.SUCCESS,
  payload: { data },
});

export const putFeedbackFailure = (error) => ({
  type: PUT_FEEDBACK.FAILURE,
  payload: { error },
});
