import API from './api';
import {
  updateCandidateInfoRequest,
  updateCandidateInfoSuccess,
  updateCandidateInfoFailure,
} from '../actions';
import fetchCandidate from './fetchCandidate';

const updateCandidateInfo = (data) => async (dispatch) => {
  dispatch(updateCandidateInfoRequest());
  try {
    await API.put(`/api/Candidate/updateCandidate`, data);

    dispatch(updateCandidateInfoSuccess());

    dispatch(fetchCandidate(data.id));
  } catch (error) {
    dispatch(updateCandidateInfoFailure());
  }
};

export default updateCandidateInfo;
