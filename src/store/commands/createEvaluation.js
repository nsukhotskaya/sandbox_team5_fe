import API from './api';
import {
  postEvaluationRequest,
  postEvaluationSuccess,
  postEvaluationFailure,
} from '../actions';
// import fetchCandidate from './fetchCandidate';

const createEvaluation = (newEvaluation) => async (dispatch) => {
  dispatch(postEvaluationRequest());
  try {
    const response = await API.post(
      '/api/Evaluation/createEvaluation',
      newEvaluation,
    );
    dispatch(postEvaluationSuccess(response.data));
    // dispatch(fetchCandidate(feedbackBody.candidateId));
  } catch (error) {
    dispatch(postEvaluationFailure());
  }
};

export default createEvaluation;
