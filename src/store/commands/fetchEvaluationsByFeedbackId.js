import API from './api';
import {
  getEvaluationsByFeedbackIdRequest,
  getEvaluationsByFeedbackIdSuccess,
  getEvaluationsByFeedbackIdFailure,
} from '../actions';

const fetchEvaluationsByFeedbackId = (feedbackId) => async (dispatch) => {
  dispatch(getEvaluationsByFeedbackIdRequest());
  try {
    const response = await API.post(
      `api/Evaluation/getEvaluationsByFeedbackId?feedbackId=${feedbackId}`,
    );
    dispatch(getEvaluationsByFeedbackIdSuccess(response.data));
  } catch (error) {
    dispatch(getEvaluationsByFeedbackIdFailure());
  }
};

export default fetchEvaluationsByFeedbackId;
