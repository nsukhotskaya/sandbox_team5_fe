import API from './api';
import {
  postFeedbackRequest,
  postFeedbackSuccess,
  postFeedbackFailure,
} from '../actions';

const createFeedback = (feedbackBody) => async (dispatch) => {
  dispatch(postFeedbackRequest());
  try {
    const response = await API.post(
      '/api/Feedback/createFeedback',
      feedbackBody,
    );
    dispatch(postFeedbackSuccess(response.data));
  } catch (error) {
    dispatch(postFeedbackFailure());
  }
};

export default createFeedback;
