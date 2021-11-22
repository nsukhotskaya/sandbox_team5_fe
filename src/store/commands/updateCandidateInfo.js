import API from './api';
import {
  updateCandidateInfoRequest,
  updateCandidateInfoSuccess,
  updateCandidateInfoFailure,
} from '../actions';

const updateCandidateInfo = (data) => async (dispatch) => {
  dispatch(updateCandidateInfoRequest());
  try {
    console.log("zapros")
    console.log(data)
    const response = await API.put(
      `/api/Candidate/updateCandidate`, data,
    );
    
    dispatch(updateCandidateInfoSuccess(response.data));
  } catch (error) {
    dispatch(updateCandidateInfoFailure());
  }
};

export default updateCandidateInfo;
