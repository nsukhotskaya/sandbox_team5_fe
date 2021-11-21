import API from './api';
import {
  updateCandidateInfoRequest,
  updateCandidateInfoSuccess,
  updateCandidateInfoFailure,
} from '../actions';

const updateCandidateInfo = (candidateInfo) => async (dispatch) => {
  dispatch(updateCandidateInfoRequest());
  try {
    const response = await API.put(`/api/Candidate/updateCandidate?body=${candidateInfo}`);
    dispatch(updateCandidateInfoSuccess(response.data.candidateInfo));
  } catch (error) {
    dispatch(updateCandidateInfoFailure());
  }
};

export default updateCandidateInfo;
