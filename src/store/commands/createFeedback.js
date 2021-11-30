import API from './api';
import {
  postFeedbackRequest,
  postFeedbackSuccess,
  postFeedbackFailure,
} from '../actions';
import fetchCandidate from './fetchCandidate';

const createFeedback = (feedbackBody) => async (dispatch) => {
  dispatch(postFeedbackRequest());
  try {
    const response = await API.post(
      '/api/Feedback/createFeedback',
      feedbackBody,
    );
    dispatch(postFeedbackSuccess(response.data));
    dispatch(fetchCandidate(feedbackBody.candidateId));
  } catch (error) {
    dispatch(postFeedbackFailure());
  }
};

export default createFeedback;
