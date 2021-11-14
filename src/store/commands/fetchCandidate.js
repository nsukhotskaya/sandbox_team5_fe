import API from './api';
import {
  getCandidateRequest,
  getCandidateSuccess,
  getCandidateFailure,
} from '../actions';

// temporarily, will be id from page
const id = 1;

const fetchCandidate = () => async (dispatch) => {
  dispatch(getCandidateRequest());
  try {
    const response = await API.get(`/api/Candidate/getCandidateById?id=${id}`);
    dispatch(getCandidateSuccess(response.data));
  } catch (error) {
    dispatch(getCandidateFailure());
  }
};

export default fetchCandidate;
