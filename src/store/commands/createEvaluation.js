import API from './api';
import {
  postEvaluationRequest,
  postEvaluationSuccess,
  postEvaluationFailure,
} from '../actions';

const createEvaluation = (newEvaluation) => async (dispatch) => {
  dispatch(postEvaluationRequest());
  try {
    const response = await API.post(
      '/api/Evaluation/createEvaluation',
      newEvaluation,
    );
    dispatch(postEvaluationSuccess(response.data));
  } catch (error) {
    dispatch(postEvaluationFailure());
  }
};

export default createEvaluation;
