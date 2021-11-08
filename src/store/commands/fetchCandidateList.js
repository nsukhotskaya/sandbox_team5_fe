import API from './api';
import {
  getCandidateListRequest,
  getCandidateListSuccess,
  getCandidateListFailure,
} from '../actions';

const fetchCandidateList = () => async (dispatch) => {
  dispatch(getCandidateListRequest());
  try {
    const response = await API.post(
      '/api/Candidate/getCandidateListByInternshipId',
      {
        pageSize: 10,
        pageNumber: 1,
        internshipId: 1,
      },
    );
    dispatch(getCandidateListSuccess(response.data));
  } catch (error) {
    dispatch(getCandidateListFailure());
  }
};

export default fetchCandidateList;
