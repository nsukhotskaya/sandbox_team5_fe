import API from './api';
import {
  getCandidateRequest,
  getCandidateSuccess,
  getCandidateFailure,
} from '../actions';

const id = 1;

const fetchCandidate = () => async (dispatch) => {
  console.log('hello from fetchCandidate');
  dispatch(getCandidateRequest());
  try {
    const response = await API.get(
      `/api/Candidate/getCandidateById?id=${id}`,
    );
    console.log(response);
    dispatch(getCandidateSuccess(response.data));
  } catch (error) {
    dispatch(getCandidateFailure());
  }
};

export default fetchCandidate;
