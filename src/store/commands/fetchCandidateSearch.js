import API from './api';
import {
    getCandidateSearchRequest,
    getCandidateSearchSuccess,
    getCandidateSearchFailure,
} from '../actions';

const fetchCandidateSearch = (data) => async (dispatch) => {
  dispatch(getCandidateSearchRequest());
  try {
    const response = await API.post(
      '/api/Candidate/candidateSearch',
      data,
    );
    console.log(response)
      dispatch(getCandidateSearchSuccess(response.data));
  } catch (error) {
    dispatch(getCandidateSearchFailure());
  }
};

export default fetchCandidateSearch;