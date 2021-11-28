import API from './api';
import {
  getFeedbacksByCandidateIdRequest,
  getFeedbacksByCandidateIdSuccess,
  getFeedbacksByCandidateIdFailure,
} from '../actions';

const fetchFeedbacksByCandidateId = (candidateId) => async (dispatch) => {
  dispatch(getFeedbacksByCandidateIdRequest());
  try {
    const response = await API.get(`api/Feedback/getFeedbacksByCandidateId?candidateId=${candidateId}`);
    dispatch(getFeedbacksByCandidateIdSuccess(response.data));
  } catch (error) {
    dispatch(getFeedbacksByCandidateIdFailure());
  }
};

export default fetchFeedbacksByCandidateId;
