import API from './api';
import {
  postCandidatesByUserRequest,
  postCandidatesByUserSuccess,
  postCandidatesByUserFailure,
} from '../actions';

const fetchCandidatesByUser = (id) => async (dispatch) => {
  dispatch(postCandidatesByUserRequest());
  try {
    const response = await API.post(
      `/api/Candidate/getCandidatesByUser?id=${id}`,
    );
    dispatch(postCandidatesByUserSuccess(response.data));
  } catch (error) {
    dispatch(postCandidatesByUserFailure());
  }
};

export default fetchCandidatesByUser;
