import API from './api';
import {
  updateCandidateStatusRequest,
  updateCandidateStatusSuccess,
  updateCandidateStatusFailure,
} from '../actions';
import fetchCandidateList  from './fetchCandidateList';

const updateCandidateStatusById =
  (data) => async (dispatch) => {
    dispatch(updateCandidateStatusRequest());
    try {
      const response = await API.put(
        "/api/Candidate/updateCandidatesStatus?status=1", data
      );
      const id = response.data && response.data[0].internshipId;
      dispatch(
        updateCandidateStatusSuccess(response.data));
      dispatch(fetchCandidateList({
          pageSize: 100000,
          pageNumber: 1,
          internshipId: id
      }))
    } catch (error) {
      dispatch(updateCandidateStatusFailure());
    }
  };

export default updateCandidateStatusById;
