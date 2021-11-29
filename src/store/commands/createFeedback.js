import API from './api';
import {
  postFeedbackRequest,
  postFeedbackSuccess,
  postFeedbackFailure,
} from '../actions';
import { fetchFeedbacksByCandidateId, fetchCandidate } from './index';

const createFeedback = (feedbackBody) => async (dispatch) => {
  dispatch(postFeedbackRequest());
  try {
    const response = await API.post('/api/Feedback/createFeedback', feedbackBody);
    dispatch(postFeedbackSuccess(response.data));
    dispatch(fetchFeedbacksByCandidateId(response.data.candidateId));
    dispatch(fetchCandidate(response.data.candidateId));
  } catch (error) {
    dispatch(postFeedbackFailure());
  }
};

export default createFeedback;
