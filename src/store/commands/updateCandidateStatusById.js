import API from './api';
import {
  updateCandidateStatusRequest,
  updateCandidateStatusSuccess,
  updateCandidateStatusFailure,
} from '../actions';

const updateCandidateStatusById =
  (statusType, candidateId) => async (dispatch) => {
    dispatch(updateCandidateStatusRequest());
    try {
      const response = await API.put(
        `/api/Candidate/updateCandidateStatus/${candidateId}?status=${statusType}`,
      );
      dispatch(
        updateCandidateStatusSuccess(
          response.data.statusType,
          response.data.id,
        ),
      );
    } catch (error) {
      dispatch(updateCandidateStatusFailure());
    }
  };

export default updateCandidateStatusById;
