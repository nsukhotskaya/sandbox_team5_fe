import API from './api';
import {
  putFeedbackRequest,
  putFeedbackSuccess,
  putFeedbackFailure,
} from '../actions';

const updateFeedback = (feedbackBody) => async (dispatch) => {
  dispatch(putFeedbackRequest());
  try {
    const response = await API.put(
      '/api/Feedback/updateFeedback',
      feedbackBody,
    );
    dispatch(putFeedbackSuccess(response.data));
  } catch (error) {
    dispatch(putFeedbackFailure());
  }
};

export default updateFeedback;
