import API from './api';
import {
  getCandidateListRequest,
  getCandidateListSuccess,
  getCandidateListFailure,
} from '../actions';

const fetchCandidateList = (data) => async (dispatch) => {
  dispatch(getCandidateListRequest());
  try {
    const response = await API.post(
      '/api/Candidate/getCandidateListByInternshipId',
      data,
    );
    dispatch(getCandidateListSuccess(response.data));
  } catch (error) {
    dispatch(getCandidateListFailure());
  }
};

export default fetchCandidateList;
